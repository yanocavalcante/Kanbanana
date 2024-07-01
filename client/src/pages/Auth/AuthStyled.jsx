
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

export const FormContainer = styled.div`
  background-color: ${props => props.isRegistro ? '#FFFF40' : '#D0B339'};
  border: 6px solid #4C2509;
  border-radius: 32px;
  width: 582px;
  min-height: 455px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const ToggleButton = styled.button`
  flex: 1;
  padding: 10px;
  cursor: pointer;
  outline: none;
  background-color: ${props => props.type === 'login' ? '#D0B339' : '#FFFF40'};
  color: #000;
  font-weight: bold;
  border: ${props => props.active ? 'none' : '3px solid #4C2509'};
  border-radius: 8px;
  margin: 0;
  transition: background-color 0.3s ease, border 0.3s ease;
`;


export const EntrarCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding-top: 10px;
`;

export const EntrarContainer = styled.button`
  padding: 10px;
  background-color: #FFFBAF;
  color: #231204;
  border: 3px solid #4C2509;
  border-radius: 8px;
  margin-top: 15px;
  width: 300px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
