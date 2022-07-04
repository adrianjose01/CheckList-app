const deleteNotes = (id) => {
  fetch(
    `https://check-list-72d18-default-rtdb.firebaseio.com/notes/${id}.json`,
    {
      method: "DELETE",
    }
  );
};

export default deleteNotes;
