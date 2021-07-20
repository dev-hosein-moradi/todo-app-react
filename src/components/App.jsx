import React, { useState } from "react";
import Header from "../components/Header";
import InfoDay from "../components/InfoDay"
import CreateNote from "../components/CreateNote";
import Notes from "../components/Notes";


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNote => {
            return [...prevNote, newNote];
        })
    }
    function deleteNote(id) {
        setNotes(() => {
            return (notes.filter((prevNote, index) => { return index !== id }))
        })
    }
    

    return (
        <div>
            <Header />
            <InfoDay />
            <CreateNote onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Notes
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                )
            })}
        </div>
    )
}
export default App;



//recieve newnote in app in CreateNote with onAdd props.
// set AddNote function to send newNote to Notes.