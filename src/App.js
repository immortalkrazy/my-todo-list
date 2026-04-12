import React, { useRef, useState, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

const CenteredApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  color: #333;
  font-size: 20px;
`;


/**
 * The App component is the top-level component of the
 * application. It stores the list of todos in the state and
 * provides functions to toggle the completed status of a todo
 * and to add a new todo.
 *
 * It renders a TodoList component to display the list of todos,
 * a form to add new todos, a button to clean up completed todos,
 * and a counter to display the number of remaining todos.
 *
 * The component uses the useEffect hook to load the todos from
 * local storage and to save the todos to local storage when
 * the state changes.
 */
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

  /**
   * Toggles the completed status of a todo.
   *
   * @param {string} id - The id of the todo to toggle.
   */

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  /**
   * Handles the submission of the add todo form.
   *
   * Prevents the default form submission behaviour, gets the
   * value of the text input, and if it is not empty, adds a new
   * todo to the state with the given name and sets the text
   * input value to null.
   * 
   * @param {Event} e - The event to prevent the default behaviour of.
   */
  const handleAddTodo = (e) => {
    e.preventDefault();

    const name = todoNameRef.current.value;
    if (name === '') return

    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })

    todoNameRef.current.value = null
  }

  /**
   * Handles the click of the clear todos button.
   *
   * Sets the todos state to an empty array.
   */
  const handleClearTodos = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <CenteredApp>
      <>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <form onSubmit={handleAddTodo}>
          <input ref={todoNameRef} type="text" />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={handleClearTodos}>Clean Completed</button>
        {/* <button onClick={() => setTodos(todos.filter(todo => !todo.completed))}>Clean Completed</button> */}
        <div>You have {todos.filter(todo => !todo.completed).length} left to do</div>
      </>
    </CenteredApp>
  )
}

export default App;
