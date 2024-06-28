import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Kanban from '../../components/Kanban/Kanban';
import { cards } from '../../../Datas';
import './WorkAreaStyled.css';

export default function WorkArea() {
  const [showNewBoardPopup, setShowNewBoardPopup] = useState(false);
  const [newBoardName, setNewBoardName] = useState('');
  const [currentColumnToDo, setCurrentColumnToDo] = useState(null);
  const [currentEditTask, setCurrentEditTask] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);
  const [boards, setBoards] = useState([]);

  const criarNovoQuadro = (nome) => {
    const newBoard = {
      name: nome,
      columns: {
        'To Do': [],
        'Doing': [],
        'Done': []
      }
    };
    setBoards([...boards, newBoard]);
  };

  const adicionarTarefa = (descricao) => {
    if (currentColumnToDo) {
      const updatedBoards = boards.map((board) => {
        if (board.columns['To Do'] === currentColumnToDo) {
          board.columns['To Do'].push({
            desc: descricao,
            title: descricao
          });
        }
        return board;
      });
      setBoards(updatedBoards);
    }
  };

  const handleDragStart = (task, column) => {
    setDraggedTask({ task, column });
  };

  const handleDrop = (column) => {
    if (draggedTask) {
      const updatedBoards = boards.map((board) => {
        const newSourceColumn = board.columns[draggedTask.column].filter(
          (t) => t !== draggedTask.task
        );
        const newTargetColumn = [...board.columns[column], draggedTask.task];
        return {
          ...board,
          columns: {
            ...board.columns,
            [draggedTask.column]: newSourceColumn,
            [column]: newTargetColumn
          }
        };
      });
      setBoards(updatedBoards);
      setDraggedTask(null);
    }
  };

  const atualizarTarefa = (novoTitulo, novaDescricao, novaData) => {
    if (currentEditTask) {
      const updatedBoards = boards.map((board) => {
        const updatedColumns = Object.keys(board.columns).reduce(
          (acc, column) => {
            const newTasks = board.columns[column].map((task) => {
              if (task === currentEditTask.task) {
                return {
                  ...task,
                  title: novoTitulo,
                  desc: novaDescricao,
                  date: novaData
                };
              }
              return task;
            });
            acc[column] = newTasks;
            return acc;
          },
          {}
        );
        return {
          ...board,
          columns: updatedColumns
        };
      });
      setBoards(updatedBoards);
      setCurrentEditTask(null);
    }
  };

  const excluirTarefa = () => {
    if (currentEditTask) {
      const updatedBoards = boards.map((board) => {
        const updatedColumns = Object.keys(board.columns).reduce(
          (acc, column) => {
            const newTasks = board.columns[column].filter(
              (task) => task !== currentEditTask.task
            );
            acc[column] = newTasks;
            return acc;
          },
          {}
        );
        return {
          ...board,
          columns: updatedColumns
        };
      });
      setBoards(updatedBoards);
      setCurrentEditTask(null);
    }
  };

  return (
    <div>
      <Navbar />
      <header>
        <nav className="navbar">
          <div className="navbar-brand">Kanbanana</div>
          <div className="menu-toggle" id="mobile-menu">&#9776;</div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" onClick={() => setShowNewBoardPopup(true)}>
                Criar Novo Quadro
              </a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => alert('Botão "Perfil" clicado!')}>
                Perfil
              </a>
            </li>
            <li className="nav-item">
              <a href="#">Retornar a Workspaces</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {boards.map((board, boardIndex) => (
          <div className="quadro" key={boardIndex}>
            <div className="quadro-title">{board.name}</div>
            {Object.keys(board.columns).map((columnTitle, columnIndex) => (
              <div
                className="column"
                key={columnIndex}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(columnTitle)}
              >
                <div className="column-title">
                  {columnTitle}
                  {columnTitle === 'To Do' && (
                    <button
                      className="add-task-btn"
                      onClick={() => {
                        setCurrentColumnToDo(board.columns['To Do']);
                        document.getElementById('task-popup').style.display = 'flex';
                      }}
                    >
                      +
                    </button>
                  )}
                </div>
                {board.columns[columnTitle].map((task, taskIndex) => (
                  <div
                    className="task"
                    key={taskIndex}
                    draggable
                    onDragStart={() => handleDragStart(task, columnTitle)}
                    onDragEnd={() => setDraggedTask(null)}
                    onClick={() => {
                      setCurrentEditTask({ task, column: columnTitle });
                      document.getElementById('edit-task-popup').style.display = 'flex';
                    }}
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </main>
      {showNewBoardPopup && (
        <div id="new-board-popup" className="popup">
          <div className="popup-content">
            <span
              className="close"
              onClick={() => {
                setShowNewBoardPopup(false);
                setNewBoardName('');
              }}
            >
              &times;
            </span>
            <h2>Criar Novo Quadro</h2>
            <textarea
              id="new-board-name"
              rows="1"
              cols="50"
              placeholder="Nome do quadro"
              value={newBoardName}
              onChange={(e) => setNewBoardName(e.target.value)}
            />
            <button
              id="create-board-btn"
              onClick={() => {
                criarNovoQuadro(newBoardName);
                setShowNewBoardPopup(false);
                setNewBoardName('');
              }}
            >
              Criar
            </button>
            <button
              id="cancel-new-board-btn"
              onClick={() => {
                setShowNewBoardPopup(false);
                setNewBoardName('');
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
