import React, { useEffect, useState } from 'react';
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
import { updateBoard } from '../../services/boardServices';

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
  const [currentTask, setCurrentTask] = useState(null);

  const { id } = useParams();
  const [currentBoard, setCurrentBoard] = useState({});

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
  };

  const addTask = () => {
    const taskDesc = document.getElementById('task-desc').value;
    const newTasks = { ...tasks, [currentTaskContainer]: [...tasks[currentTaskContainer], taskDesc] };
    setTasks(newTasks);
    setShowTaskPopup(false);
  };

  const updateTask = () => {
    const editTaskDesc = document.getElementById('edit-task-desc').value;
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
    const editBoardName = document.getElementById('edit-board-name').value;
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
      const response = await updateBoard(currentBoard)
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
          <a href="#" id="retornar-workspaces-btn">
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
            >
              {tasks.todo.map((task, index) => (
                <Task
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, 'todo')}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    setCurrentTaskContainer('todo');
                    setCurrentTask(task);
                    setShowEditTaskPopup(true);
                  }}
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
            >
              {tasks.doing.map((task, index) => (
                <Task
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, 'doing')}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    setCurrentTaskContainer('doing');
                    setCurrentTask(task);
                    setShowEditTaskPopup(true);
                  }}
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
            >
              {tasks.done.map((task, index) => (
                <Task
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, 'done')}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    setCurrentTaskContainer('done');
                    setCurrentTask(task);
                    setShowEditTaskPopup(true);
                  }}
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
          <TextArea id="task-desc" rows="5" placeholder="Descrição da tarefa"></TextArea>
          <Button onClick={addTask}>Adicionar</Button>
        </PopupContent>
      </Popup>

      <Popup show={showEditTaskPopup}>
        <PopupContent>
          <Close onClick={closePopup}>&times;</Close>
          <h3>Editar Tarefa</h3>
          <TextArea id="edit-task-desc" rows="5" defaultValue={currentTask}></TextArea>
          <Button onClick={updateTask}>Atualizar</Button>
          <Button onClick={deleteTask}>Excluir</Button>
        </PopupContent>
      </Popup>

      <Popup show={showEditBoardNamePopup}>
        <PopupContent>
          <Close onClick={closePopup}>&times;</Close>
          <h3>Editar Nome do Quadro</h3>
          <Input id="edit-board-name" type="text" placeholder="Nome do quadro" />
          <Button onClick={updateBoardName}>Atualizar</Button>
        </PopupContent>
      </Popup>

      <Popup show={showCompartilharKanbanPopup}>
        <PopupContent>
          <Close onClick={closePopup}>&times;</Close>
          <h3>Compartilhar Kanban</h3>
          <p>Compartilhe este kanban com seus colaboradores:</p>
          <Input id="kanban-email" type="email" value={email} onChange={handleEmailChange} placeholder="Email do colaborador" />
          <Button onClick={shareKanban}>Compartilhar</Button>
        </PopupContent>
      </Popup>
    </>
  );
};

export default Kanbanana;