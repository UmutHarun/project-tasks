import NewTask from "./NewTask";

export default function Tasks({tasks,onAdd,onDelete,project}){
    return <section>
        <h2 className="font-bold">Tasks</h2>
        <NewTask onAdd={onAdd} />
        {tasks.length === 0 && (
            <p className="my-4">This project does not have any tasks yet.</p>
        )}
        {tasks.length > 0 && 
        <ul className="p-4 mt-5 rounded">
            {tasks.map((task) => {
                if(task.projectId === project.id){
                    return (
                        <li key={task.id} className="d-flex justify-content-between my-4">
                            <span>{task.text}</span>
                            <button className="btn btn-secondary" onClick={() => onDelete(task.id)}>Clear</button>
                        </li>
                    );
                }
                return undefined;
            })}
        </ul>}
    </section>
}