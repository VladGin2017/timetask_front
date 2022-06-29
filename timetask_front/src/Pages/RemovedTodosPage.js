import axios from "axios";
import React, { useEffect, useState } from "react";
import SubMenu from "../SubMenu/SubMenu";
import TodoListApp from "../TodoApp/TodoListApp";
import TodoListRemoved from "../TodoApp/TodoListRemoved";

const RemovedTodos = () => {
    return (
        <>
            <div className="main-container-view">
                <div className="submenu__container">
                    <SubMenu></SubMenu>
                </div>
                <div className="page-container">
                    <div className="page-info">
                        <h1 className="page-title">Корзина</h1>
                    </div>
                    <div>
                        <TodoListRemoved></TodoListRemoved>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RemovedTodos;