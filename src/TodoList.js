import React from "react"
import ToDoListItem from "./ToDoListItem"

function TodoList({todos, onRemove, onToggle}) {
    return (
        <ul className="TodoList">
            {todos.map((todo) => (
                <ToDoListItem
                todo={todo}
                key={todo.id}
                onRemove={onRemove}
                onToggle={onToggle}
                />
            ))}
        </ul>
    )
}

export default TodoList;