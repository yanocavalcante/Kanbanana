import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #74370d;
  }
`;

export const Header = styled.header`
  background-color: #4c2509;
  color: #faf7d2;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const NavbarBrand = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const MenuToggle = styled.div`
  display: none;
  font-size: 2em;
  cursor: pointer;
  color: #faf7d2;
`;

export const NavbarNav = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin-left: 20px;

  a {
    color: #4c2509;
    margin-left: 20px;
    border-radius: 8px;
    padding: 5px;
    background-color: #faf7d2;
    text-decoration: none;
    font-size: 1em;
    padding: 8px 12px;
    transition: background-color 0.3s;
  }
`;

export const Main = styled.main`
  margin-top: 60px;
  padding: 20px;
`;

export const Quadro = styled.div`
  width: 100%;
  background-color: #faf7d2;
  color: #4c2509;
  border: 2px solid #4c2509;
  margin-bottom: 20px;
  position: relative;
  padding: 30px 10px 10px;
  border-radius: 10px;
`;

export const QuadroTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  position: absolute;
  top: 5px;
  left: 10px;
  color: #fff4e6;
  background-color: #74370d;
  padding: 5px;
  border-radius: 5px;
`;

export const Column = styled.div`
  width: 33.33%;
  display: inline-block;
  vertical-align: top;
  position: relative;
  padding: 10px;

  &:nth-child(1),
  &:nth-child(3) {
    padding: 10px 20px 10px 10px;
  }
`;

export const ColumnTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #74370d;

  .add-task-btn {
    background-color: #74370d;
    border: none;
    border-radius: 5px;
    color: #faf7d2;
    font-size: 1.2em;
    cursor: pointer;
    float: right;
  }
`;

export const Task = styled.div`
  background-color: #fff4e6;
  border: 1px solid #74370d;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const Popup = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  background-color: #faf7d2;
  color: #4c2509;
  border: 2px solid #4c2509;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;

  .close {
    color: #4c2509;
    float: right;
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;
  }

  textarea {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #74370d;
    padding: 5px;
    margin-top: 10px;
  }

  button {
    background-color: #74370d;
    border: none;
    border-radius: 5px;
    color: #faf7d2;
    padding: 10px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 10px;
  }
`;
