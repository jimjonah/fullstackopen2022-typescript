import React, {useEffect} from 'react';
import './App.css';

import {useState} from 'react';
import {DiaryEntry} from "./types";
import diaryService from "./services/diaryService";
import toNewDiaryEntry from "./services/utils";

const App = () => {
  const [newDate, setNewDate] = useState('');
  const [newVisibility, setNewVisibility] = useState('');
  const [newWeather, setNewWeather] = useState('');
  const [newComment, setNewComment] = useState('');
  const [dairies, setDiaries] = useState<DiaryEntry[]>([]);
  const [newError, setNewError] = useState('');


  useEffect(() => {
    diaryService.getAllEntries().then(data => {
      setDiaries(data)
    })
  }, [])

  const noteCreation = (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
      const newEntry = toNewDiaryEntry(newDate, newWeather, newVisibility, newComment);
      const noteToAdd = {
        id: dairies.length + 1,
        ...newEntry,
      }

      diaryService.addEntry(noteToAdd);
      setDiaries(dairies.concat(noteToAdd));
    } catch (e) {
      if (e instanceof Error) {
        const errorMessage = ' Error: ' + e.message;
        setNewError(errorMessage);
        setTimeout(() => {
          setNewError('')
        }, 5000)
      }
    }
    setNewDate('')
    setNewVisibility('')
    setNewWeather('')
    setNewComment('')
  };


  return (
    <div>
      <h2>Add New Entry</h2>
      {newError && <p style={{color:'red'}}>{newError}</p>}
      <form onSubmit={noteCreation}>
        Date <input value={newDate} onChange={(event) => setNewDate(event.target.value)}/> <br/>
        Visibility <input value={newVisibility} onChange={(event) => setNewVisibility(event.target.value)}/> <br/>
        Weather <input value={newWeather} onChange={(event) => setNewWeather(event.target.value)}/> <br/>
        Comment <input value={newComment} onChange={(event) => setNewComment(event.target.value)}/> <br/>
        <button type='submit'>add</button>
      </form>
      <h2>Diary Entries</h2>
      <ul>
        {dairies.map(note =>
          <ul key={note.id}><p><b>{note.date}</b></p>
            visibility: {note.visibility}<br/>
            weather: {note.weather}<br/>
            {note.comment}</ul>
        )}
      </ul>
    </div>
  )
}

export default App;
