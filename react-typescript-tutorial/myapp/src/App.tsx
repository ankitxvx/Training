import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';

function App() {
  const  personName = {
    first : 'Bruce',
    last : 'Wayne'
  }
  const nameList = [
    {
      first : 'Clark',
      last  : 'Kent'
    },
    {
      first : 'Princess',
      last  : 'Daina'
    }
  ]
  return (
    <div className="App">
       {/* <Greet  name = 'vishwas' msgCount={19} isLoggedin ={true}/>
       <Person name = {personName}/>
       <PersonList names = {nameList}/> */}
       <div className='App'>
         <Status status='loading'></Status>
         <Heading>Place Holder Text</Heading>
           <Oscar>Hellow</Oscar>
          <Greet name='Vishwa' isLoggedin = {false}/>
          <Button handleClick={(event,id)=>{console.log('button Clicked')}}/>
       </div>
    </div>
  );
}

export default App;
