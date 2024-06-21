import Navbar from '../../components/Navbar/Navbar'
import Kanban from '../../components/Kanban/Kanban'
import { cards } from '../../../Datas'

export default function WorkArea() {
    return (
        <section>
            <Navbar />
            {cards.map( (item, index) => (
                <Kanban key={index} card={item} />
            ))}
        </section>
    )
}