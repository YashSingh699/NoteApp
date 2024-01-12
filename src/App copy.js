
import { useState } from 'react';
import './index.css';
const initialNotes = [
  {
    id: 1,
    title: "History",
    body: "LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of m Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 2,
    title: "Geography",
    body: "LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sLoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of m Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 3,
    title: "Psychology",
    body: "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of m Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 4,
    title: "Political Science",
    body: "since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type remaining essentially unchanged. It was popularised in the 1960s with the release of m Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
]



export default function App() {
  const [notesArr, setNotesArr] = useState(initialNotes);

  function handleNewNote(newNote) {
    setNotesArr((notesArr) => [...notesArr, newNote]);
  }
  function handleDeleteNote(id) {
    setNotesArr(notesArr => notesArr.filter(newNote => newNote.id !== id));
  }
  return (
    <div>
      <Header />
      <AddNoteForm onAddNotes={handleNewNote} />
      <Notes notesArr={notesArr} onDeleteNote={handleDeleteNote} />
    </div>
  );
}


function Header() {
  return <div className='header'>
    <div>
      <h2>Notes App</h2>
    </div>
    <div>

      <textarea placeholder='Search...' type='text' cols={30} />
      <button className='icon icon-search'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256"><path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path></svg></button>
    </div>
    <div >

      <button className='button btn-home'>HOME</button>
      <button className='button btn-logout'>Logout</button>
    </div>
  </div>

}
function AddNoteForm({ onAddNotes }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!noteBody || !noteTitle) return;
    const id = crypto.randomUUID();
    let newNote = {
      id: `${id}`,
      body: noteBody,
      title: noteTitle,
    }

    onAddNotes(newNote);
    console.log(newNote);


    setNoteTitle("");
    setNoteBody("");
  }
  return (<div >
    <form >
      <div className="add-note-form sizing-note">

        <textarea placeholder='Title...' value={noteTitle} onChange={e => setNoteTitle(e.target.value)} type='text' cols={70} />
        <p>
          <textarea placeholder="Content" rows={12} cols={70} value={noteBody} onChange={e => setNoteBody(e.target.value)} required />
        </p>
        <button className='button btn-add' onClick={handleSubmit}>Add Notes</button>
      </div>

    </form>
  </div>)

}
function Notes({ notesArr, onDeleteNote }) {

  return < >

    <div >
      <div className='notes'>{notesArr.map(notem => <Note onDeleteNote={onDeleteNote} notem={notem} key={notem.id} />)}
      </div>

    </div>
  </>
}
function Note({ notem, onDeleteNote }) {
  return (
    <div className='note'>
      <div className='note-header'><h3>{notem.title}</h3>
        <button onClick={() => onDeleteNote(notem.id)} className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg></button></div>
      <p>{notem.body}
      </p>
    </div>
  )
}