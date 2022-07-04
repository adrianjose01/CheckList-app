const getNotes = async () => {
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

export default getNotes;
