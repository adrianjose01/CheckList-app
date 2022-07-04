const postNewNote = async (noteMessage) => {
  const res = await fetch(
    "https://check-list-72d18-default-rtdb.firebaseio.com/notes.json",
    {
      method: "POST",
      body: JSON.stringify({
        message: noteMessage,
      }),
    }
  );

  return res.json();
};

export default postNewNote;
