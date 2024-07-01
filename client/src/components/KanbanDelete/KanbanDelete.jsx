import { KanbanDeleteDiv } from './KanbanDeleteStyled';

export function KanbanDelete({name, owner, onclick}){
    return(
        <KanbanDeleteDiv onClick={onclick}>
                <h2>{name}</h2>
                <p>{owner}</p>
            </KanbanDeleteDiv>
    )
}