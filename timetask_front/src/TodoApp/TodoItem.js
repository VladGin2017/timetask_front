import React, {useContext, useState} from "react";
import Context from "../context";
import { Link } from "react-router-dom";

export default function TodoItem(props) {
    const { completeTodos } = useContext(Context);

    return (
        <li className="todo-list__item">
            <strong className="indef-of-task">{props.index + 1}.</strong>
            <span className="todo-list__item__container">
                <div>
                    <Link to='*' className="todo-list__item__container__title">{props.todos.title}</Link>
                    <p className="todo-list__item__container__description">{props.todos.description}</p>
                    <p>{props.todos.date}</p>
                </div>
            </span>
            <button className="btn-change-task" onClick={ () => console.log(props.todos.id)}>Редактировать</button>
            <input type='checkbox' className="chk-box__done" checked={completeTodos}  onChange={ () => completeTodos(props.todos.id)}></input>
        </li>
    )
}
