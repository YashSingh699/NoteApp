import Note from "./Note";
import { useNoteContext } from "./NoteContext"

export default function Notes() {
  const { notesArr, searchedNotes } = useNoteContext();
  const notes = searchedNotes.length > 0 ? searchedNotes : notesArr;
  console.log();
  return < >

    <div >
      <div className='notes'>{notes?.map(notem => <Note notem={notem} key={notem.id} />)}
      </div>

    </div>
  </>
}
