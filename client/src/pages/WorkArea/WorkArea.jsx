import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Kanban from '../../components/Kanban/Kanban';
import { cards } from '../../../Datas';
import {
  Header,
  Navbar,
  NavbarBrand,
  MenuToggle,
  NavbarNavWork,
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
} from './WorkAreaStyled';

const Kanbanana = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [showTaskPopup, setShowTaskPopup] = useState(false);
  const [showEditTaskPopup, setShowEditTaskPopup] = useState(false);
  const [showEditBoardNamePopup, setShowEditBoardNamePopup] = useState(false);
  const [showCompartilharKanbanPopup, setShowCompartilharKanbanPopup] = useState(false);
  const [currentTaskContainer, setCurrentTaskContainer] = useState(null);

  const { id } = useParams()
  const [ currentBoard, setCurrentBoard ] = useState[{}]

  useEffect(() => {
    try {
      const response = getBoardById(id)
      setCurrentBoard(response)
    } catch (error) {
      console.log(error)
    }
  }, [])

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
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.draggable = true;
    newTask.textContent = taskDesc;

    // Evento para editar tarefa
    newTask.addEventListener('click', function () {
      const editTaskDesc = document.getElementById('edit-task-desc');
      editTaskDesc.value = this.textContent;
      setShowEditTaskPopup(true);
      setCurrentTaskContainer(this);
    });

    // Evento para drag and drop
    newTask.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('text/plain', e.target.id);
      setTimeout(() => {
        newTask.classList.add('dragging');
      }, 0);
    });

    newTask.addEventListener('dragend', function () {
      newTask.classList.remove('dragging');
    });

    currentTaskContainer.appendChild(newTask);
    setShowTaskPopup(false);
  };

  const updateTask = () => {
    const editTaskDesc = document.getElementById('edit-task-desc').value;
    currentTaskContainer.textContent = editTaskDesc;
    setShowEditTaskPopup(false);
  };

  const deleteTask = () => {
    currentTaskContainer.remove();
    setShowEditTaskPopup(false);
  };

  const updateBoardName = () => {
    const boardTitle = document.getElementById('edit-board-title');
    const editBoardName = document.getElementById('edit-board-name').value;
    boardTitle.textContent = editBoardName;
    setShowEditBoardNamePopup(false);
  };

  return (
    <>
      <Header>
        <Navbar>
          <NavbarBrand>Kanbanana</NavbarBrand>
          <MenuToggle onClick={toggleMenu}>&#9776;</MenuToggle>
          <NavbarNav active={isMenuActive}>
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
          </NavbarNav>
        </Navbar>
      </Header>

      <Main>
        <Quadro>
          <QuadroTitle id="edit-board-title" onClick={() => setShowEditBoardNamePopup(true)}>Quadro</QuadroTitle>
          <Column id="todo">
            <ColumnTitle>
              <div>To do</div>
              <AddTaskBtn onClick={() => openTaskPopup(document.getElementById('todo'))}>+</AddTaskBtn>
            </ColumnTitle>
            <TaskContainer></TaskContainer>
          </Column>
          <Column id="doing">
            <ColumnTitle>
              <div>Doing</div>
              <AddTaskBtn onClick={() => openTaskPopup(document.getElementById('doing'))}>+</AddTaskBtn>
            </ColumnTitle>
            <TaskContainer></TaskContainer>
          </Column>
          <Column id="done">
            <ColumnTitle>
              <div>Done</div>
              <AddTaskBtn onClick={() => openTaskPopup(document.getElementById('done'))}>+</AddTaskBtn>
            </ColumnTitle>
            <TaskContainer></TaskContainer>
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
          <TextArea id="edit-task-desc" rows="5"></TextArea>
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
          <Input id="kanban-link" type="text" value="Email" readOnly />
        </PopupContent>
      </Popup>
    </>
  );
};

export default Kanbanana;