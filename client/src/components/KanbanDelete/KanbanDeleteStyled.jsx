import styled from "styled-components";

export const KanbanDeleteDiv = styled.div`
    margin: 5px 0;
    padding: 10px;
    width: 80%;
    background-color: #FAF7D2;
    border: 2px solid #231204;
    border-radius: 5px;
    color: #231204;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #FFFF60;
    }
`;