import React, {useState} from 'react';
// const React = require('react') // common js module format

const NotesDisplay = ({aBunchOfNotes, errorColor, fontColor, deleteNote}) => {
    if (!aBunchOfNotes || !aBunchOfNotes.length) {
        return (<p style={{color: errorColor || 'red' }}>There are no notes</p>)
    }
    return aBunchOfNotes.map((note, index) => {
        return (
            <p onClick={(event) => {
                    const index = parseInt(event.target.getAttribute('id'))
                    deleteNote(index);
                }}
                id={index}
                style={{color: fontColor}}
            >{note}</p>)
    })
}

const Notes = () => {

    const [notes, setNotes] = useState([
        'This is a note',
        'Clean the kitchen!'
    ])

    const deleteNote = (index) => {
        let newNotes = [...notes];
        newNotes = newNotes.splice(index, 1);
        setNotes(newNotes);
    }


    const [userInput, setUserInput] = useState('')

    return (
        <div>
            <h1>Here are you notes</h1>
            <NotesDisplay deleteNote={deleteNote} errorColor="purple" fontColor="green" aBunchOfNotes={notes}/>

            <input
                value={userInput}
                onChange={(event) => {
                    const input = event.target.value;
                    setUserInput(input);
                    
                }}
                type="text"/>
            <button onClick={() => {
                if (!userInput) {
                    return;
                }
                setNotes([...notes, userInput])
                setUserInput('')
            }}>Add note</button>
        </div>
    )
}