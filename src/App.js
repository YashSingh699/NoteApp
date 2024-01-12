import { NoteProvider } from './NoteContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Header from './Header';
import AddNoteForm from './AddNoteForm';
import Notes from './Notes';
import Login from './Login';


export default function App() {

  return (
    <div>
      <NoteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              <Header />
              <AddNoteForm />
              <Notes />
            </>
            }></Route>
            <Route path="login" element={<Login />
            }></Route>

          </Routes>
        </BrowserRouter>

      </NoteProvider>
    </div>
  );
}


