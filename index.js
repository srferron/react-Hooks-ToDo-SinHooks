import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoC from './TodosWithClasses';
import './style.css';

function App() {
  return (
   <> 
    <h1>Todos with classes</h1>
    <TodoC/>
   </> 
  )
}

render(<App />, document.getElementById('root'));
