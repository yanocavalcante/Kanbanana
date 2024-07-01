import styled from 'styled-components';

export const Header = styled.header`
  background-color: #D0B339;
  color: #FAF7D2;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const NavbarBrand = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const MenuToggle = styled.div`
  display: none;
  font-size: 2em;
  cursor: pointer;
  color: #FAF7D2;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavbarNav = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: ${props => (props.active ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;

export const NavItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }

  a {
    color: #4C2509;
    margin-left: 20px;
    border-radius: 8px;
    padding: 5px;
    color: #4C2509;
    background-color: #D0B339;
    text-decoration: none;
    font-size: 1em;
    padding: 8px 12px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #74370D;
      color: #FAF7D2;
    }
  }
`;

export const FloatingMenu = styled.div`
  position: center;
  top: 100px;
  right: 20px;
  background-color: #D0B339;
  padding: 10px;
  box-shadow: 0 0 10px rgba(184, 19, 19, 0.1);
  z-index: 1001;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  margin-top: 20px;
  font-size: 16px; /* Tamanho padrão da fonte para telas maiores */

  @media (max-width: 720px) {
    font-size: 11px; /* Tamanho da fonte ajustado para telas menores */
  }

  @media (max-width: 479px) {
    font-size: 7px; /* Tamanho da fonte ajustado para telas menores */
  }
`;



export const Main = styled.main`
  margin-top: 120px; /* Ajustado para colocar o conteúdo mais para baixo */
  padding: 20px;
  margin-right: 25PX;
`;

export const Quadro = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #D0B354;
  color: #231204;
  border: 4px solid #4C2509;
  margin-bottom: 20px;
  position: relative;
  padding: 30px 10px 10px;
  border-radius: 10px;
  margin-top: 20px; /* Ajustado para colocar o quadro mais para baixo */
`;

export const QuadroTitle = styled.div`

  font-size: 1.2em;
  font-weight: bold;
  position: absolute;
  top: 5px;
  margin-bottom: 10px;
  left: 10px;
  cursor: pointer;
`;

export const Column = styled.div`
  width: 30%;
  background-color: #FFFF60;
  padding: 10px;
  border-radius: 5px;
`;

export const ColumnTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AddTaskBtn = styled.button`
  background-color: #FAF7D2;
  color: #4C2509;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  font-size: 1.2em;
  line-height: 0;

  &:hover {
    background-color: #74370D;
    color: #FAF7D2;
  }
`;

export const TaskContainer = styled.div`
  min-height: 200px;
`;

export const Task = styled.div`
  background-color: #FAF7D2;
  color: #4C2509;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #4C2509;
  user-select: none;
  word-break: break-word;
  white-space: pre-wrap; /* Permite que o texto quebre em várias linhas */

  &:hover {
    background-color: #e0c4a1;
  }
`;

export const Popup = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const PopupContent = styled.div`
  background-color: #FAF7D2;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #4C2509;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  position: relative;
`;

export const Close = styled.span`
  color: #4C2509;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #74370D;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  width: 96%;
  margin: 10px 0;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #4C2509;
  resize: none;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;  /* Defina um tamanho fixo */
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #4C2509;
  box-sizing: border-box;
  resize: none;  /* Desabilita o redimensionamento */
`;


export const Button = styled.button`
  background-color: #4C2509;
  color: #FAF7D2;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #74370D;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;