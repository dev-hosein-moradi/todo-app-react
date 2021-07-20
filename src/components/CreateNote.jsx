import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import "./Notes.css"

function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    };
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    };

    return (
        <div>
            <div class="form-note">
                <form>
                    <input onChange={handleChange} value={note.title} name="title" type="text" placeholder="title..."  autoComplete="off" />
                    <textarea onChange={handleChange} value={note.content} name="content" placeholder="take note..." rows="5" />
                    <button type="submit" onClick={submitNote}><AddIcon /></button>
                </form>
            </div>
        </div>
    )
}
export default CreateNote;