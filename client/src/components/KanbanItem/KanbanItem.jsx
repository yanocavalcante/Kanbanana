import { Link } from 'react-router-dom';
import { KanbanItemSection } from './KanbanItemStyled';

export function KanbanItem({name, owner, id}) {

    return (
        <Link to={`/home/workarea/${id}`}>
            <KanbanItemSection>
                <h2>{name}</h2>
                <p>{owner}</p>
            </KanbanItemSection>
        </Link>
    )
}