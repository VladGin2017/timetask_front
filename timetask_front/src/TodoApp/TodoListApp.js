import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import Loader from "../Loader/Loader";
import SubMenu from "../SubMenu/SubMenu";
import AddTodoFunc from "./AddTodoFunc";
import Context from "../context";

export default function TodoListApp()  {
    const [todos, setTodos] = useState([]);
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(true);
    const date = new Date();
    const dateNormalize = date.toISOString().split('T')[0];
    
    useEffect(() => {
        axios.get('https://dev.timetask.ru/api/Task', {
            params: {UserId: localStorage.getItem('token'), date: dateNormalize }
        })
        .then(response => {
            const todosList = response.data;
            setTodos(todosList);
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
        setTodos(todos.filter(todo => todo.id !== id));
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
            console.log(response.data);
            setTodos(todos.concat(newTodosList));  
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
                {/* <SubMenu></SubMenu> */}
                <div className="todo-list__container">
                    {loading && <Loader></Loader>}
                    <ul className="todo-list__list">
                        {todos.length ? (<div>
                            {todos.map((todos, index) => {
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
