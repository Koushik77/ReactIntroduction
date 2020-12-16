import React from 'react';

function TodoList({todos}) {
    return (
        <div>
            This is my todo-list
            {todos.map( (todo,index) => {
                return <div>{todo}</div>
            })}

        </div>
    )
}

export default TodoList
