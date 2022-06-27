import React from "react";
import TodoListCompleted from "../TodoApp/TodoListCompletedList";
import SubMenu from "../SubMenu/SubMenu";

export default function CompletedTodo() {
    return (
        <div className="main-container-view">
            <div className="submenu__container">
                        <SubMenu></SubMenu>
                    </div>
            <div className="page-container">
                <div className="page-info">
                    <h1 className="page-title">Выполненные</h1>
                    {/* <p className="page-date">{date.toISOString().split('T')[0]}</p> */}
                </div>
                <TodoListCompleted></TodoListCompleted>
            </div>
        </div>
    )
}