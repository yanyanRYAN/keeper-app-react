import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNotes(note){
    console.log("Adding note");
    console.log(note);
    setNotes(previousItem => {return [...previousItem, note]});

    
  }

  //useEffect(()=>{console.log("Note Array:"); console.log(notes)});
  
  function deleteNote(id){
    setNotes(previousNotes => previousNotes.filter((note, index) => {
      return index != id
    }))
  }


  return (
    <div>
      <Header />
      <CreateArea addNoteToArray={addNotes} />
      {notes.map((note, index) => (<Note key={index} id={index} noteItem={note} onDelete={deleteNote} />))}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
