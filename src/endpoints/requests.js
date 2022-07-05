export const deleteNotes = (id) => {
  fetch(
    `https://check-list-72d18-default-rtdb.firebaseio.com/notes/${id}.json`,
    {
      method: "DELETE",
    }
  );
};

export const getNotes = async () => {
  const notes = [];
  await fetch("https://check-list-72d18-default-rtdb.firebaseio.com/notes.json")
    .then((res) => res.json())
    .then((data) => {
      for (const key in data) {
        notes.push({ id: key, message: data[key].message });
      }
    });
  return notes;
};

export const postNewNote = async (noteMessage) => {
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
