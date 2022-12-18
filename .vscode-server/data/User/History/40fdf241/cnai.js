import React from "react";

function CreateTodoButton() {
    return(
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { CreateTodoButton };