import React from "react";
import TodoListApp from "../TodoApp/TodoListApp";

const TodayTask = () => {
    const date = new Date(); 
    return (
        <div className="page-container">
            <div className="page-info">
                <h1 className="page-title"> Задачи на сегодня</h1>
                <p className="page-date">{date.toISOString().split('T')[0]}</p>
            </div>
            <TodoListApp></TodoListApp>
        </div>
    )
}

export default TodayTask;