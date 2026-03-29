import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo';

/**
 * A component that renders a list of todos.
 *
 * @param {Object} props - The props to pass to the component.
 * @param {Array} props.todos - The list of todos to render.
 * @param {function} props.toggleTodo - A function to call when the user checks/unchecks a todo.
 *
 * @returns {React.ReactNode} - The rendered component.
 */
export default function TodoList({ todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        })
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
};