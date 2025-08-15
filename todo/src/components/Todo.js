import React from 'react';
import { useState } from 'react';

function Todo() {
  const [list,setList] = useState([])
  const [input, setInput] = useState('')

  function btnHandler(){
    setList([...list,input])
    setInput('')
  }
 function dlt(){
  setList([''])
 }

  return (
   <div>
    <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} /><button onClick={btnHandler}>addTask</button>
    <p>your list is: {list}</p>

    <button onClick={dlt}>Delete complete list </button>
   </div>

  );
}

export default Todo;
