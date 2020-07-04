import React from "react";


function Note(props) {

  function handleClick(){
    props.onDelete(props.id)
  }

  return (
    <div className="note" >
      <h1>{props.noteItem.noteTitleInput}</h1>
      <p>{props.noteItem.noteContentInput}</p>
      <button onClick={handleClick}>DEL</button>
    </div>
  );
}

export default Note;
