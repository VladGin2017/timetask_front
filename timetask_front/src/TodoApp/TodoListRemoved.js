import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from "../context";
import Loader from "../Loader/Loader";
import TodoItem from "./TodoItem";

export default function TodoListRemoved() {
    const [removedTodo, setRemovedTodo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dev.timetask.ru/api/Task/Deleted', 
        {params: {
            UserId: localStorage.getItem('token')
        }
    }) .then (response => {
        const getTodoRemoved = response.data;
        setRemovedTodo(getTodoRemoved);
        setLoading(false);
    })  .catch(error => {
        if (error.response) {
            alert(error.message)
        }
        else if (error.request) {
            alert(error.message)
        }
    })
    }, [])

    return (
            <div className="todo-list">
                <div className="todo-list__container">
                    {loading && <Loader></Loader>}
                    <ul className="todo-list__list">
                            {removedTodo.length ? (<div>
                            {removedTodo.map((todos, index) => {
                                return <TodoItem todos={todos} key={todos.id} index={index}></TodoItem>
                            }) }
                            </div>) : loading ? null : (<p className="todo-list__is-null">Здесь пока пусто.</p>)}
                    </ul>
                </div>
            </div>

    )
}
