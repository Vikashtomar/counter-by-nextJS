import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

function Mytodo() {
  const [inp, setInp] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addTodo() {
    if (inp.trim() === '') return; // Prevent adding empty items
    if (editIndex !== null) {
      // If edit mode is active, update the existing todo
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? inp : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null); // Disable edit mode
    } else {
      // Otherwise, add a new todo
      setTodos([...todos, inp]);
    }
    setInp('');
  }

  function editTodo(index) {
    setEditIndex(index);
    setInp(todos[index]);
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setEditIndex(null); // Disable edit mode if deleting the todo being edited
  }

  return (
    <div>
      <input
        type="text"
        placeholder='enter something'
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button onClick={addTodo}>
        {editIndex !== null ? <EditIcon /> : <AddIcon />}
      </button>

      <ul>
        {todos.map((value, index) => {
          return (
            <li key={index}>
              {value}{' '}
              <button onClick={() => editTodo(index)}>
                <EditIcon />
              </button>{' '}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Mytodo;
