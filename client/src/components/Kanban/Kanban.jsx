export default function Kanban({card}) {
    return(
        <section>
            <div>
                <h2>To do</h2>
                <p>{card.todo.toString()}</p>
            </div>
            <div>
                <h2>Doing</h2>
                <p>{card.doing.toString()}</p>
            </div>
            <div>
                <h2>Done</h2>
                <p>{card.done.toString()}</p>
            </div>
        </section>
    )
}