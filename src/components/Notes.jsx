import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Notes.css"


function Notes(props) {


    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div>

            <div className="note">
                <h5 contenteditable="true" spellCheck="false">{props.title}</h5>
                <p contenteditable="true" spellCheck="false">{props.content}</p>
                <button onClick={handleClick}><DeleteIcon /></button>
            </div>


        </div>
    )

}

export default Notes;