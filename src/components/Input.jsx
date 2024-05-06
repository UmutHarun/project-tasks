import { forwardRef } from "react";

const Input = forwardRef(function Input({label,textarea, ...props} , ref){
    const classes = "border rounded p-2";
    const styles = {width:"100%",resize: "none"};

    return(
        <p>
            <div className="my-2"><label style={{fontWeight:"bold"}}>{label}</label></div>
            {textarea ? 
            <textarea ref={ref} className={classes} style={styles} {...props} /> 
            : <input ref={ref} className={classes} style={styles} {...props} />}
        </p>
    )
});

export default Input;