import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import Loader from "../Loader/Loader";
import SubMenu from "../SubMenu/SubMenu";
import AddTodoFunc from "./AddTodoFunc";
import Context from "../context";

export default function TodoListIncoming()  {
    const [todosIncoming, setTodosIncoming] = useState([]);
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(true);
    const date = new Date();
    const dateNormalize = date.toISOString().split('T')[0];
    
    useEffect(() => {
        axios.get('https://dev.timetask.ru/api/Task/Incoming/', {
        params: {UserId: localStorage.getItem('token')}})
        .then(response => {
            const todosList = response.data;
            setTodosIncoming(todosList);
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

    function completeTodos(id) {
        axios.put('https://dev.timetask.ru/api/Task/Completed?Id=' + id);
        setTodosIncoming(todosIncoming.filter(todo => todo.id !== id));
        return (setChecked(!checked));
    }

    function addTodo(title, description, date, priority, hours, minutes) {
        axios.post('https://dev.timetask.ru/api/Task', { userId: localStorage.getItem('token'), 
                                                        title: title, 
                                                        description: description,
                                                        date: date,
                                                        priority: priority,
                                                        hours: hours,
                                                        minutes: minutes })
        .then (response => {
            const newTodosList = response.data;
            setTodosIncoming(todosIncoming.concat(newTodosList));  
        })
        .catch(error => {
            if (error.response) {
                alert(error.message)
            }
            else if (error.request) {
                alert(error.message)
            }
        })
    }

    return (
        <Context.Provider value={{ completeTodos, addTodo }}>
            <div className="todo-list">
                <div className="todo-list__container">
                    {loading && <Loader></Loader>}
                    <ul className="todo-list__list">
                        {todosIncoming.length ? (<div>
                            {todosIncoming.map((todos, index) => {
                                return <TodoItem todos={todos} key={todos.id} index={index}></TodoItem>
                            }) }
                            </div>) : loading ? null : (<p className="todo-list__is-null">Ваш список задач пуст.</p>)}
                    </ul>
                    <AddTodoFunc></AddTodoFunc>
                </div>
            </div>
        </Context.Provider>
    )
    }