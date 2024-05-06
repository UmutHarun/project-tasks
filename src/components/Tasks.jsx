import NewTask from "./NewTask";

export default function Tasks(){
    return <section>
        <h2 className="font-bold">Tasks</h2>
        <NewTask />
        <p className="my-4">This project does not have any tasks yet.</p>
        <ul>

        </ul>
    </section>
}