import React, { useState } from 'react';
import Sub from './Sub';
import './App.css';

function App() {
  const [ subject, setSubject ] = useState('');
  const [ year, setYear ] = useState('');
  const onChangeHandler = e => {
    if(e.target.id == 'subject') setSubject(e.target.value);
    else setYear(e.target.value);
  }
  return (
    <div className="App">
      <div>
        <input id= "subject" name="year" value={ subject } onChange= { onChangeHandler } />
      </div>
      <div>
        <input type= "radio" name="year" value= "2018" onChange= { onChangeHandler }/>
        2018
      </div>
      <div>
        <input type= "radio" name="year" value= "2019" onChange= { onChangeHandler }/>
        2019
      </div>
      <div>
        <input type= "radio" name="year" value= "2020" onChange= { onChangeHandler }/>
        2020
      </div>
      <div>
        <input type= "radio" name="year" value= "2021" onChange= { onChangeHandler }/>
        2021
      </div>
      <div>
        <input type= "radio" name="year" value= "2022" onChange= { onChangeHandler }/>
        2022
      </div>
      <Sub  subject = { subject } year= { year }/>
    </div>
  );
}

export default App;
