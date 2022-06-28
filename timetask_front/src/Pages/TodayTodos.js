import axios from "axios";
import React, { useEffect, useState } from "react";
import SubMenu from "../SubMenu/SubMenu";
import TodoListApp from "../TodoApp/TodoListApp";

const TodayTask = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const arrMonth = ['Января', 
                    'Февраля', 
                    'Марта', 
                    'Апреля', 
                    'Мая', 
                    'Июня', 
                    'Июля', 
                    'Августа', 
                    'Сентября', 
                    'Октября', 
                    'Ноября', 
                    'Декабря']
    // const dateNormalize = date.toISOString().split('T')[0];
    const getMonth = arrMonth[month];

    return (
        <>
            <div className="main-container-view">
                <div className="submenu__container">
                    <SubMenu></SubMenu>
                </div>
                <div className="page-container">
                    <div className="page-info">
                        <h1 className="page-title">Cегодня, {day} {getMonth}</h1>
                        {/* <p className="page-date"></p> */}
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