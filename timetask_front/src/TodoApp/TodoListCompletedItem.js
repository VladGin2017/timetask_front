import React, { useContext } from "react";
import Context from "../context";


export default function TodoListCompletedItem(props) {
    const {unCompleteTodos} = useContext(Context)
    return (
        <li className="todo-list__item">
            <strong className="indef-of-task">{props.index + 1}.</strong>
            <span className="todo-list__item__container">
                <div>
                    <h1 className="todo-list__item__container__title">{props.completedTodos.title}</h1>
                    <p className="todo-list__item__container__description">{props.completedTodos.description}</p>
                </div>
            </span>
            {/* <button className="btn-change-task" onClick={ () => console.log(props.completedTodos.id)}>Редактировать</button> */}
            <input type='checkbox' className="chk-box__done" onChange={ () => unCompleteTodos(props.completedTodos.id)}></input>
        </li>
    )
}