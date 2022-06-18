import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoListApp from "../TodoApp/TodoListApp";

const TodayTask = () => {
    const date = new Date();
    const dateNormalize = date.toISOString().split('T')[0];
    const [timeSum, setTimeSum] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dev.timetask.ru/api/Time/', {params: {UserId: localStorage.getItem('token'), date: dateNormalize}} )
        .then (response => {
            const time = response.data;
            setTimeSum(time);
            // console.log(response);
            // console.log(response);
        })
    }, [])
    console.log(timeSum);
    console.log(dateNormalize);
    return (
        <div className="page-container">
            <div className="page-info">
                <h1 className="page-title"> Задачи на сегодня</h1>
                <p className="page-date">{dateNormalize}</p>
            </div>
            <TodoListApp></TodoListApp>
        </div>
    )
}

export default TodayTask;