import { KanbanDeleteDiv } from './KanbanDeleteStyled';

export function KanbanDelete({name, onclick}){
    return(
        <KanbanDeleteDiv onClick={onclick}>
                <h2>{name}</h2>
            </KanbanDeleteDiv>
    )
}