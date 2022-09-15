import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App(){
  const [notes, setNotes] = useState([
  {
    id: nanoid(),
    text: "This is my first note!",
    date: '15/06/2022',
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: '05/06/2022',
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: '25/06/2022',
  },
  {
    id: nanoid(),
    text: "This is my new note!",
    date: '30/06/2022',
  },
]);

const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );
    if (savedNotes){
      setNotes(savedNotes);
    }
}, [])

useEffect(() => {
 localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
 );
}, [notes]);

const addNote = (text) => {
 const date = new Date();
 const newNote = {
  id: nanoid(),
   text: text,
   date: date.toLocaleDateString(),
 };

 const newNotes = [...notes, newNote];
 setNotes(newNotes);
};

const deleteNote = (id) => {
 const newNotes =  notes.filter((note) => note.id !== id );
 setNotes(newNotes);

}

  return(
<div className={`${darkMode && 'dark-mode'}`}>

<div className="container">
<Header handleToggleDarkMode={setDarkMode}/>  
 <Search handleSearchNote={setSearchText}/>
  <NotesList 
  notes={notes.filter((note) => 
    note.text.toLowerCase().includes(searchText)
    )}
  handleAddNote={addNote}
  handleDeleteNote={deleteNote}
  />
  
 </div>

</div>


  );
}




export default App;



