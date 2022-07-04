import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import Container from "./UI/Container";
import getNotes from "./helpers/getNotes";

const App = () => {
  const [notes, setNotes] = useState([]);

  const deleteNotes = (id) => {
    const newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
  };

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  useEffect(() => {
    getNotes().then((n) => setNotes(n));
  }, []);

  return (
    <>
      <Header />
      <NewNote onAddNote={addNote} />
      <Container>
        {notes.map((note) => (
          <Note
            message={note.message}
            key={note.id}
            id={note.id}
            onDeleteNotes={deleteNotes}
          />
        ))}
        {notes.length === 0 && (
          <p style={{ color: "red" }}>Your CheckList is Empty!</p>
        )}
      </Container>
    </>
  );
};

export default App;
