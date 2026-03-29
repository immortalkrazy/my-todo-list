import React, { useRef, useState, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  const handleAddTodo = (e) => {
    e.preventDefault();

    const name = todoNameRef.current.value;
    if (name === '') return

    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })

    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todos} />
      <form onSubmit={handleAddTodo}>
        <input ref={todoNameRef} type="text" />
        <button type="submit">Add Todo</button>
      </form>
      <button>Clean Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
