import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import {
  Header,
  NavbarBrand,
  MenuToggle,
  NavbarNav,
  NavItem,
  Main,
  Quadro,
  QuadroTitle,
  Column,
  ColumnTitle,
  AddTaskBtn,
  TaskContainer,
  Task,
  Popup,
  PopupContent,
  Close,
  TextArea,
  Input,
  Button,
  FloatingMenu,
} from './WorkAreaStyled';
import { getBoardById, updateBoard, addUserInBoard } from '../../services/boardServices';

const Kanbanana = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [showTaskPopup, setShowTaskPopup] = useState(false);
  const [showEditTaskPopup, setShowEditTaskPopup] = useState(false);
  const [showEditBoardNamePopup, setShowEditBoardNamePopup] = useState(false);
  const [showCompartilharKanbanPopup, setShowCompartilharKanbanPopup] = useState(false);
  const [currentTaskContainer, setCurrentTaskContainer] = useState(null);
  const [email, setEmail] = useState('');
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: []
  });
  const [currentTask, setCurrentTask] = useState('');
  const [editTaskText, setEditTaskText] = useState('');

  const { id } = useParams();
  const [currentBoard, setCurrentBoard] = useState({});

  const taskDescRef = useRef(null);
  const editTaskDescRef = useRef(null);
  const boardNameRef = useRef(null);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await getBoardById(id);
        setCurrentBoard(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBoard();
  }, [id]);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const openTaskPopup = (container) => {
    setCurrentTaskContainer(container);
    setShowTaskPopup(true);
  };

  const closePopup = () => {
    setShowTaskPopup(false);
    setShowEditTaskPopup(false);
    setShowEditBoardNamePopup(false);
    setShowCompartilharKanbanPopup(false);
    if (taskDescRef.current) taskDescRef.current.value = '';
    if (editTaskDescRef.current) editTaskDescRef.current.value = '';
    if (boardNameRef.current) boardNameRef.current.value = '';
    setEmail('');
  };

  const addTask = () => {
    const taskDesc = taskDescRef.current.value;
    const newTasks = { ...tasks, [currentTaskContainer]: [...tasks[currentTaskContainer], taskDesc] };
    setTasks(newTasks);
    taskDescRef.current.value = ''; // Limpa o campo de texto após adicionar a tarefa
    setShowTaskPopup(false);
  };

  const updateTask = () => {
    const editTaskDesc = editTaskDescRef.current.value;
    const updatedTasks = tasks[currentTaskContainer].map(task => 
      task === currentTask ? editTaskDesc : task
    );
    setTasks({ ...tasks, [currentTaskContainer]: updatedTasks });
    setShowEditTaskPopup(false);
  };

  const deleteTask = () => {
    const updatedTasks = tasks[currentTaskContainer].filter(task => task !== currentTask);
    setTasks({ ...tasks, [currentTaskContainer]: updatedTasks });
    setShowEditTaskPopup(false);
  };

  const updateBoardName = () => {
    const boardTitle = document.getElementById('edit-board-title');
    const editBoardName = boardNameRef.current.value;
    boardTitle.textContent = editBoardName;
    setShowEditBoardNamePopup(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const shareKanban = async (email) => {
    try {
      const response = await addUserInBoard(email);
    } catch (error) {
      console.log(error);
    }
  };

  const saveChanges = async () => {
    try {
      const response = await updateBoard(currentBoard, currentBoard._id)
      console.log('Changes saved');
    } catch (error) {
      console.log(error)
    }
  };

  const handleDragStart = (e, task, container) => {
    e.dataTransfer.setData('task', task);
    e.dataTransfer.setData('source', container);
    setTimeout(() => {
      e.target.classList.add('dragging');
    }, 0);
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove('dragging');
  };

  const handleDrop = (e, targetContainer) => {
    const task = e.dataTransfer.getData('task');
    const sourceContainer = e.dataTransfer.getData('source');

    if (sourceContainer !== targetContainer) {
      setTasks(prevTasks => ({
        ...prevTasks,
        [sourceContainer]: prevTasks[sourceContainer].filter(t => t !== task),
        [targetContainer]: [...prevTasks[targetContainer], task]
      }));
    }
  };

  const openEditTaskPopup = (task, container) => {
    setCurrentTask(task);
    setEditTaskText(task);
    setCurrentTaskContainer(container);
    setShowEditTaskPopup(true);
  };

  // Funções para eventos de toque
  const handleTouchStart = (e, task, container) => {
    handleDragStart({ ...e, dataTransfer: { setData: (type, val) => { e.dataTransfer = { type, val } } } }, task, container);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains('task-container')) {
      element.ondragover = e => e.preventDefault();
    }
  };

  const handleTouchEnd = (e, targetContainer) => {
    handleDrop({ ...e, dataTransfer: { getData: type => e.dataTransfer[type] } }, targetContainer);
  };

  return (
    <>
      <Header>
        <Navbar>
          <NavbarBrand>Kanbanana</NavbarBrand>
          <MenuToggle onClick={toggleMenu}>&#9776;</MenuToggle>
        </Navbar>
      </Header>

      <FloatingMenu active={isMenuActive}>
        <NavItem>
          <a href="/home" id="retornar-workspaces-btn">
            Retornar a Workspaces
          </a>
        </NavItem>
        <NavItem>
          <a href="#" id="compartilhar-kanban-btn" onClick={() => setShowCompartilharKanbanPopup(true)}>
            Compartilhar Kanban
          </a>
        </NavItem>
        <NavItem onClick={saveChanges}>
          <a href="#" id="salvar-alteracoes-btn">
            Salvar Alterações
          </a>
        </NavItem>
      </FloatingMenu>

      <Main>
        <Quadro>
          <QuadroTitle id="edit-board-title" onClick={() => setShowEditBoardNamePopup(true)}>Quadro</QuadroTitle>
          <Column id="todo">
            <ColumnTitle>
              <div>To do</div>
              <AddTaskBtn onClick={() => openTaskPopup('todo')}>+</AddTaskBtn>
            </ColumnTitle>
            <TaskContainer
              className="task-container"
              onDrop={(e) => handleDrop(e, 'todo')}
              onDragOver={(e) => e.preventDefault()}
              onTouchMove={handleTouchMove}
              onTouchEnd={(e) => handleTouchEnd(e, 'todo')}
            >
              {tasks.todo.map((task, index) => (
                <Task
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, 'todo')}
                  onDragEnd={handleDragEnd}
                  onTouchStart={(e) => handleTouchStart(e, task, 'todo')}
                >
                  {task}
                </Task>
              ))}
            </TaskContainer>
          </Column>
          <Column id="doing">
            <ColumnTitle>
              <div>Doing</div>
            </ColumnTitle>
            <TaskContainer
              className="task-container"
              onDrop={(e) => handleDrop(e, 'doing')}
              onDragOver={(e) => e.preventDefault()}
              onTouchMove={handleTouchMove}
              onTouchEnd={(e) => handleTouchEnd(e, 'doing')}
            >
              {tasks.doing.map((task, index) => (                <Task
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, 'doing')}
                  onDragEnd={handleDragEnd}
                  onTouchStart={(e) => handleTouchStart(e, task, 'doing')}
                >
                  {task}
                </Task>
              ))}
            </TaskContainer>
          </Column>
          <Column id="done">
            <ColumnTitle>
              <div>Done</div>
            </ColumnTitle>
            <TaskContainer
              className="task-container"
              onDrop={(e) => handleDrop(e, 'done')}
              onDragOver={(e) => e.preventDefault()}
              onTouchMove={handleTouchMove}
              onTouchEnd={(e) => handleTouchEnd(e, 'done')}
            >
              {tasks.done.map((task, index) => (
                <Task
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, 'done')}
                  onDragEnd={handleDragEnd}
                  onTouchStart={(e) => handleTouchStart(e, task, 'done')}
                >
                  {task}
                </Task>
              ))}
            </TaskContainer>
          </Column>
        </Quadro>
      </Main>

      <Popup show={showTaskPopup}>
        <PopupContent>
          <Close onClick={closePopup}>&times;</Close>
          <h3>Adicionar Tarefa</h3>
          <TextArea id="task-desc" ref={taskDescRef} rows="5" placeholder="Descrição da tarefa"></TextArea>
          <Button onClick={addTask}>Adicionar</Button>
        </PopupContent>
      </Popup>

      <Popup show={showEditTaskPopup}>
        <PopupContent>
          <Close onClick={closePopup}>&times;</Close>
          <h3>Editar Tarefa</h3>
          <TextArea id="edit-task-desc" ref={editTaskDescRef} rows="5" value={editTaskText} onChange={(e) => setEditTaskText(e.target.value)}></TextArea>
          <Button onClick={updateTask}>Atualizar</Button>
          <Button onClick={deleteTask}>Excluir</Button>
        </PopupContent>
      </Popup>

      <Popup show={showEditBoardNamePopup}>
        <PopupContent>
          <Close onClick={closePopup}>&times;</Close>
          <h3>Editar Nome do Quadro</h3>
          <Input id="edit-board-name" type="text" ref={boardNameRef} placeholder="Nome do quadro" />
          <Button onClick={updateBoardName}>Atualizar</Button>
        </PopupContent>
      </Popup>

      <Popup show={showCompartilharKanbanPopup}>
        <PopupContent>
          <Close onClick={closePopup}>&times;</Close>
          <h3>Compartilhar Kanban</h3>
          <p>Compartilhe este kanban com seus colaboradores:</p>
          <Input id="kanban-email" type="email" value={email} onChange={handleEmailChange} placeholder="Email do colaborador" />
          <Button onClick={() => shareKanban(email)}>Compartilhar</Button>
        </PopupContent>
      </Popup>
    </>
  );
};

export default Kanbanana;

               
