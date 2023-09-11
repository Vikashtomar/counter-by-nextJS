
"use client"
import React, { useState } from 'react';

const Todo = () => {
  const [add, setAdd] = useState([]);
  const [inp, setInp] = useState('');

  function addtodo() {
    setAdd([...add, inp]);
    setInp('');
  }
  

  function deleteTodo(index) {
    const updatedTodos = add.filter((_, i) => i !== index);
    setAdd(updatedTodos);
  }

 
  return (
    <div>
      
      <h3>Add your to-do</h3>
      <input
        type="text"
        placeholder="enter something"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button onClick={addtodo}>Add</button>

      <ul>
        {add.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

