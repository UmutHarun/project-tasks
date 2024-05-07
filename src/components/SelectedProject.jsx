import Tasks from "./Tasks";

export default function SelectedProject({project,onDelete,onAddTask,onDeleteTask,tasks}){

    const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US" , {
        year:"numeric",
        month: "short",
        day: "numeric"
    });

    return <div className="m-4 w-25">
        <header className="mb-4">
            <div className="d-flex justify-content-between">
                <h1 className="me-3">{project.title}</h1>
                <button onClick={onDelete} className="btn btn-outline-light text-dark border">Delete</button>
            </div>
            <p>{formattedDate}</p>
            <p>{project.description}</p>
        </header>
        <hr />
        <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} project={project} />
    </div>
}