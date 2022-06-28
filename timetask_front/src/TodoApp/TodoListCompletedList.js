import React, { useEffect, useState } from "react";
import axios from "axios";
import Context from "../context";
import TodoListCompletedItem from "./TodoListCompletedItem";
import Loader from "../Loader/Loader";

export default function TodoListCompleted() {
    const [completedTodos, setCompletedTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        axios.get('https://dev.timetask.ru/api/Task/Completed', {
            params: {UserId: localStorage.getItem('token')}
        })
        .then(response => {
            const completedTodos = response.data;
            setCompletedTodos(completedTodos);
            setLoading(false);
        })
        .catch(error => {
            if (error.response) {
                alert(error.message)
            }
            else if (error.request) {
                alert(error.message)
            }
        })
    }, [])
    
    function unCompleteTodos(id) {
        axios.put('https://dev.timetask.ru/api/Task/NotCompleted?Id=' + id)
        setCompletedTodos(completedTodos.filter(todo => todo.id !== id))
    }

        return(
            <Context.Provider value={{ unCompleteTodos }}>
                <div className="todo-list">
                    <div className="todo-list__container">
                        {loading && <Loader></Loader>}
                        <ul className="todo-list__list">
                            {completedTodos.length ? (<div>
                                {completedTodos.map((completedTodos, index) => {
                                    return <TodoListCompletedItem completedTodos={completedTodos} key={completedTodos.id} index={index}></TodoListCompletedItem>
                                }) }
                                </div>) : loading ? null : (<p className="todo-list__is-null">Вы еще не выполнили ни одной задачи</p>)}
                        </ul>
                    </div>
                </div>
            </Context.Provider>
        )
    }