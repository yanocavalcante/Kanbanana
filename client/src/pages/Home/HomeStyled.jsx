import styled from 'styled-components';

export const Centerdiv = styled.div`
    background-color: white;
    margin-top: 32px;
    margin-left: 15%;
    margin-right: 15%;
`;

export const OuterContainer = styled.div`
    background-color: #D0B354;
    padding: 20px;
    border: 2px solid #231204;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const Container = styled.div`
    text-align: center;
`;

export const Title = styled.h1`
    margin-bottom: 20px;
`;

export const KanbanList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &.delete-button {
        background-color: #4C2509;

        &:hover {
            background-color: #231204;
        }
    }

    &.add-button {
        background-color: #74370D;

        &:hover {
            background-color: #4C2509;
        }
    }
`;

export const Modal = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
    background-color: #D0B354;
    margin: 15% auto;
    padding: 20px;
    border: 2px solid #231204;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
    text-align: center;
`;

export const CloseButton = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover,
    &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const KanbanOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 200px;
    overflow-y: auto;
`;

export const ConfirmationButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const ConfirmButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    background-color: #74370D;
    color: white;

    &:hover {
        background-color: #4C2509;
    }
`;

export const CancelButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    background-color: #4C2509;
    color: #FAF7D2;

    &:hover {
        background-color: #231204;
    }
`;

export const Input = styled.input`
    width: 80%;
    padding: 10px;
    margin-top: 10px;
    border: 2px solid #231204;
    border-radius: 5px;
`;
