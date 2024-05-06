import "../Bootstrap/bootstrap.css";

export default function ProjectsSidebar({onStartAddProject,projects}){
    return (
    <aside class="bg-dark text-white p-3 rounded w-25 m-3">
        <h2 class="mb-4" style={{textTransform:"uppercase",fontSize:21}}>Your Projects</h2>
        <div class="mb-3">
            <button class="btn btn-outline-light" onClick={onStartAddProject}>+ Add Project</button>
        </div>
        <ul class="list-group">
            {projects.map(project => 
            <li className="list-group-item bg-dark p-0 m-0" key={project.id}>
                <button className="px-2 w-100 btn btn-dark">{project.title}</button>
            </li>)}
        </ul>
    </aside>
    );
}