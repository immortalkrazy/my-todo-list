import React from 'react'
import PropTypes from 'prop-types';

export default function Todo({ todo }) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.name}
            </label>

        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
}; 
