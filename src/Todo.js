import React from 'react'
import PropTypes from 'prop-types';


/**
 * A Todo component that displays a todo item and allows
 * the user to check/uncheck the item.
 *
 * @param {Object} todo - The todo item to display.
 * @param {function} toggleTodo - A function to call when the
 *     user checks/unchecks the todo item.
 */
export default function Todo({ todo, toggleTodo }) {
    function handleTodoChecked() {
        toggleTodo(todo.id);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={handleTodoChecked} />
                {todo.name}
            </label>

        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
}; 
