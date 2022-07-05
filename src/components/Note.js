import React, { useRef } from "react";
import Card from "../UI/Card";
import classes from "./Note.module.css";

const Note = (props) => {
  const inputCheckNote = useRef();

  const deleteButtonHandler = () => {
    props.onDeleteNotes(props.id);
  };

  return (
    <Card>
      <div className={classes.note}>
        <input
          type="checkbox"
          ref={inputCheckNote}
          onClick={deleteButtonHandler}
        />
        <p>{props.message}</p>
        <button onClick={deleteButtonHandler}>X</button>
      </div>
    </Card>
  );
};

export default Note;
