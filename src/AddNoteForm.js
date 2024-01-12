import { useNoteContext } from "./NoteContext"

export default function AddNoteForm() {
  const { noteBody, noteTitle, handleSubmit, dispatch } = useNoteContext();
  return (<div >
    <form >
      <div className="add-note-form sizing-note">

        <textarea placeholder='Title...' value={noteTitle} onChange={e => dispatch({ type: "add-title", payload: e.target.value })} type='text' cols={70} />
        <p>
          <textarea placeholder="Content" rows={12} cols={70} value={noteBody} onChange={e => dispatch({ type: "add-body", payload: e.target.value })} required />
        </p>
        <button className='button btn-add' onClick={handleSubmit}>Add Notes</button>
      </div>

    </form>
  </div>)

}