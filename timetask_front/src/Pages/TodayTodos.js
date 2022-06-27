import axios from "axios";
import React, { useEffect, useState } from "react";
import SubMenu from "../SubMenu/SubMenu";
import TodoListApp from "../TodoApp/TodoListApp";

const TodayTask = () => {
    const date = new Date();
    const dateNormalize = date.toISOString().split('T')[0];

    return (
        <>
            <div className="main-container-view">
                <div className="submenu__container">
                    <SubMenu></SubMenu>
                </div>
                <div className="page-container">
                    <div className="page-info">
                        <h1 className="page-title">Cегодня</h1>
                        <p className="page-date">{dateNormalize}</p>
                    </div>
                    <div>
                        <TodoListApp></TodoListApp>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodayTask;