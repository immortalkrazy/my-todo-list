import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo';

export default function TodoList({ todos }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
        })
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
};