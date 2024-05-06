import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd , onCancel}){

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === "" || 
        enteredDescription.trim() === "" || 
        enteredDueDate.trim() === ""){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description : enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2>Invalid Input</h2>
                <p>Oops.. looks like you forgot to enter a value.</p>
                <p>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="m-2" style={{width:"500px",height:"100%"}}>
            <menu className="d-flex justify-content-end">
                <div className="m-2"><button className="btn" onClick={onCancel}>Cancel</button></div>
                <div className="m-2"><button className="btn btn-dark" onClick={handleSave}>Save</button></div>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" textarea={false}/>
                <Input ref={description} label="Description" textarea={true}/>
                <Input type="date" ref={dueDate} label="Due Date" textarea={false}/>   
            </div>
        </div>
        </>
    )
}