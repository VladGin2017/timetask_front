import React from "react";
import TodoListCompleted from "../TodoApp/TodoListCompletedList";


export default function CompletedTodo() {
    return (
        <div className="page-container">
            <div className="page-info">
                <h1 className="page-title">Выполненные</h1>
                {/* <p className="page-date">{date.toISOString().split('T')[0]}</p> */}
            </div>
            <TodoListCompleted></TodoListCompleted>
        </div>
    )
}