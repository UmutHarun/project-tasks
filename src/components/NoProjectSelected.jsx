import noTask from "../assets/no-task.png"

export default function NoProjectSelected({onStartAddProject}) {
    return (
        <div className="text-center w-50" style={{marginTop:"150px"}}>
            <img src={noTask} alt="no-task" className="img-fluid h-25" />
            <h2 className="font-bold mt-4">No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <p>
                <button className="btn btn-dark" onClick={onStartAddProject}>Create new project</button>
            </p>
        </div>
    )
}