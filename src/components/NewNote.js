import React, { Fragment, useState, useRef } from "react";
import classes from "./NewNote.module.css";
import postNewNote from "../helpers/postNewNote";

const NewNote = (props) => {
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [error, setError] = useState(false);
  const inputNewNoteRef = useRef();

  const inputIsNotValid = <p className={classes.error}>Enter a valid note!</p>;

  const addingNewNoteHandler = (e) => {
    setIsAddingNote(true);
    setError(false);
  };

  const cancelButtonHandler = (e) => {
    e.preventDefault();
    setIsAddingNote(false);
  };

  const addNotehandler = (e) => {
    e.preventDefault();
    const enteredMessage = inputNewNoteRef.current.value;
    if (enteredMessage !== "") {
      postNewNote(enteredMessage).then((data) => {
        props.onAddNote({ id: data.name, message: enteredMessage });
      });
      setIsAddingNote(false);
    } else {
      setIsAddingNote(false);
      setError(true);
    }
  };

  return (
    <Fragment>
      {!isAddingNote && (
        <p className={classes.text} onClick={addingNewNoteHandler}>
          + New Note
        </p>
      )}
      {isAddingNote && (
        <form className={classes.form} onSubmit={addNotehandler}>
          <p>Write your note here</p>
          <input type="text" ref={inputNewNoteRef} />
          <div className={classes.btn}>
            <button>Add Note</button>
            <button
              onClick={cancelButtonHandler}
              className={classes.cancel_btn}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      {error && inputIsNotValid}
    </Fragment>
  );
};

export default NewNote;
