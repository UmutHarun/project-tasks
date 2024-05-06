import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle, useRef } from "react"

const Modal = forwardRef(function Modal({children, buttonCaption} , ref){
    const dialog = useRef();

    useImperativeHandle(ref,() => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(<dialog className="rounded p-5" ref={dialog}>
        {children}
        <form method="dialog">
            <button className="btn btn-dark">{buttonCaption}</button>
        </form>
    </dialog> , document.getElementById("modal-root"))
})

export default Modal;