import React from "react"
import ToDoListItem from "./ToDoListItem"

function TodoList({todos, onRemove}) {
    return (
        <ul className="TodoList">
            {todos.map((todo) => (
                <ToDoListItem
                todo={todo}
                key={todo.id}
                onRemove={onRemove}
                />
            ))}
        </ul>
    )
}

export default TodoList;