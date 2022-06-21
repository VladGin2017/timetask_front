import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoListApp from "../TodoApp/TodoListApp";

const TodayTask = () => {
    const date = new Date();
    const dateNormalize = date.toISOString().split('T')[0];
    const [timeSum, setTimeSum] = useState('');

    useEffect(() => {
        axios.get('https://dev.timetask.ru/api/Time/', {params: {UserId: localStorage.getItem('token'), date: dateNormalize}} )
        .then (response => {
            const time = response.data;
            setTimeSum(time);
        })
    }, [])
    return (
        <div className="page-container">
            <div className="page-info">
                <h1 className="page-title"> Задачи на сегодня</h1>
                <p className="page-date">{dateNormalize}</p>
                <p>Время на задачи: {timeSum.hours}ч. {timeSum.minutes}мин. &nbsp;&nbsp;&nbsp;&nbsp;</p> 
            </div>
            <TodoListApp></TodoListApp>
        </div>
    )
}

export default TodayTask;