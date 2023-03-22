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
      setNewDate('')
      setNewVisibility('')
      setNewWeather('')
      setNewComment('')
    } catch (e) {
      if (e instanceof Error) {
        const errorMessage = ' Error: ' + e.message;
        setNewError(errorMessage);
        setTimeout(() => {
          setNewError('')
        }, 5000)
      }
    }
  };


  return (
    <div>
      <h2>Add New Entry</h2>
      {newError && <p style={{color:'red'}}>{newError}</p>}
      <form onSubmit={noteCreation}>
        <label htmlFor="start">Date:</label>
        <input type="date" id="start" name="dairy-date" style={{width:'155px'}}
               value={newDate}
               min="2018-01-01" max="2025-12-31"
               onChange={(event) => setNewDate(event.target.value)}/><br/>

        <div>
          Visibility

          Great   <input type="radio" name="filter"
                              onChange={() => setNewVisibility('great')} />
          Good    <input type="radio" name="filter"
                              onChange={() => setNewVisibility('good')} />
          OK      <input type="radio" name="filter"
                              onChange={() => setNewVisibility('ok')} />
          Poor    <input type="radio" name="filter"
                         onChange={() => setNewVisibility('poor')} />
        </div>

        <div>
          Weather

          Sunny   <input type="radio" name="filter"
                         onChange={() => setNewWeather('sunny')} />
          Rainy    <input type="radio" name="filter"
                         onChange={() => setNewWeather('rainy')} />
          Windy      <input type="radio" name="filter"
                         onChange={() => setNewWeather('windy')} />
          Cloudy    <input type="radio" name="filter"
                         onChange={() => setNewWeather('cloudy')} />
          Stormy    <input type="radio" name="filter"
                           onChange={() => setNewWeather('stormy')} />
        </div>
        {/*Weather <input value={newWeather} onChange={(event) => setNewWeather(event.target.value)}/> <br/>*/}
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
