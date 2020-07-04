import React, { useState, useEffect } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({noteTitleInput: "", noteContentInput: ""});



  function handleChange(event){
    // const title = event.target.value;
    // const content = event.target.value;
    const {name, value} = event.target;

    setNotes(previousValue => {
      if(name==="title"){
        return {
          noteTitleInput: value,
          noteContentInput: previousValue.noteContentInput
        }
      } else if (name==="content"){
        return {
          noteTitleInput: previousValue.noteTitleInput,
          noteContentInput: value
        }
      }
    })


  }

  function addNotes(){
    props.addNoteToArray(notes);

    setNotes({noteTitleInput: "", noteContentInput: ""});
  }



  return (
    <div>
      <form>
        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={notes.noteTitleInput} 

        />
        <textarea 
        onChange={handleChange} 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        value={notes.noteContentInput} />
        <button
        onClick={(event) => {addNotes(); event.preventDefault();}
        }
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
