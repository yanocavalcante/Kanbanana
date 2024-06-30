import styled from "styled-components";

export const KanbanItemSection = styled.button`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 150px;
    margin: 10px;
    background-color: #FAF7D2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #231204;
    font-weight: bold;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #FFFF60;
    }
`;