import React from "react";
import TodoListApp from "../TodoApp/TodoListApp"
import TodoListIncoming from "../TodoApp/TodoListIncoming";

const IncomingTodos = () => {
    return (
        <div className="page-container">
            <div className="page-info">
                <h1 className="page-title">Входящие</h1>
            </div>
            <TodoListIncoming></TodoListIncoming>
            {/* <TodoListApp></TodoListApp> */}
        </div>
    )
}

export default IncomingTodos;