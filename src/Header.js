import { Link } from "react-router-dom";
import { useNoteContext } from "./NoteContext";

export default function Header() {
  const { searchNote, dispatch, handleSearchNotes } = useNoteContext();
  return <div className='header'>
    <div>
      <h2>Notes App</h2>
    </div>
    <div className="search-container">

      <textarea placeholder='Search...' className="search-textarea" type='text' cols={30} value={searchNote} onChange={e => dispatch({ type: "search-input", payload: e.target.value })}
      />
      <button className='icon icon-search' onClick={() => handleSearchNotes()}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#364f67" viewBox="0 0 256 256"><path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path></svg></button>
    </div>
    <div >
      <Link to='/'>
        <button className='button btn-home'>HOME</button>
      </Link>
      <Link to='login'>

        <button className='button btn-logout'>Logout</button>
      </Link>
    </div>
  </div>

}