import { createContext, useContext, useReducer } from "react";
export const NoteContext = createContext("");

const initialNotes = [
  {
    id: 12,
    title: "New note",
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries body.",

  },
  {
    id: 1,
    title: "History",
    body: "LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    id: 2,
    title: "Geography",
    body: "LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sLoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 3,
    title: "Psychology",
    body: "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of m Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    id: 4,
    title: "Political Science",
    body: "since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
]

const initialState = { noteTitle: "", noteBody: "", id: "", notesArr: initialNotes, searchNote: '', searchedNotes: [] };
function reducer(state, action) {
  switch (action.type) {
    case 'add-title':
      return { ...state, noteTitle: action.payload };
    case 'add-body':
      return { ...state, noteBody: action.payload };
    case 'add-note':
      return { ...state, notesArr: action.payload, noteBody: '', noteTitle: '', id: '' };
    case 'delete-note':
      return { ...state, notesArr: action.payload };
    case 'search-input':
      return { ...state, searchNote: action.payload };
    case 'search-notes':
      return {
        ...state, searchedNotes: action.payload, searchNote: ''
      };
    default:
      throw new Error('Unknown errror');
  }
}
function NoteProvider({ children }) {



  function handleDeleteNote(id) {
    dispatch({ type: "delete-note", payload: notesArr.filter(newNote => newNote.id !== id) });
  }
  const [{ noteTitle, noteBody, id, notesArr, searchNote, searchedNotes }, dispatch] = useReducer(reducer, initialState);


  function handleSubmit(e) {
    e.preventDefault();

    if (!noteBody || !noteTitle) return;
    const id = crypto.randomUUID();
    let newNote = {
      id: `${id}`,
      title: noteTitle,
      body: noteBody,
    }

    dispatch({ type: 'add-note', payload: [...notesArr, newNote] })
    console.log(newNote);
    // handleNewNote(newNote);

  }
  function handleSearchNotes() {
    if (!searchNote) return;

    const filterBySearch = notesArr.filter(note => note.title.toLowerCase().includes(searchNote.toLowerCase()) || note.body.toLowerCase().includes(searchNote.toLowerCase()))

    dispatch({
      type: "search-notes", payload: filterBySearch
    })

  }
  return (

    <NoteContext.Provider value={{ noteBody, noteTitle, handleSubmit, dispatch, notesArr, id, handleDeleteNote, searchNote, handleSearchNotes, searchedNotes }} >
      {children}
    </NoteContext.Provider >
  )
}

function useNoteContext() {
  return useContext(NoteContext);
}

export { NoteProvider, useNoteContext };
