import React, {useContext, useEffect, useState} from "react";
import Context from "../context";
import EditModalPage from "../Pages/EditPage";
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import axios from "axios";

export default function TodoItem(props) {
    const { completeTodos } = useContext(Context);
    const [modalShow, setModalShow] = useState(null);
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const { addTodo } = useContext(Context);
    
    function handleSubmit(e) {
        e.preventDefault();
        
    }

    function EditModalPage(props) {
        const [editTodo, setEditTodo] = useState([]);
        useEffect(() => {
            axios.get('https://dev.timetask.ru/api/Task/Task/', {
                params: {id: modalShow}
            })
            .then( response => {
                const todo = response.data;
                setEditTodo(todo);
            }     
            )
        }, [])
        return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >   
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                <p>Редактирование задачи</p>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="register-form__container">
                    <form className='register-form__form'>
                        <label htmlFor='title'>Название задачи:</label>
                        <input type='text' id='title' name='title' value={editTodo.title}  placeholder='Название задачи' className="register-form__input" required></input>
                        <label htmlFor='description'>Описание задачи:</label>
                        <textarea type='text' id='description' name='description' value={editTodo.description} placeholder='Описание задачи' className="register-form__input" rows='10' cols='50' required></textarea>
                        <label htmlFor='date'>Срок выполнения задачи:</label>
                        {/* <input type='date' id='date' name='date' value={editTodo.date} ></input> */}
                        <label htmlFor='priority'>Приоритет задачи:</label>
                        <select name='priority' id='priority' value={editTodo.priority}>
                            <option value='0' className='priority-txt ft'>0 приоритет</option>
                            <option value='1' className='priority-txt hd'>1 приоритет</option>
                            <option value='2' className='priority-txt md'>2 приоритет</option>
                            <option value='3' className='priority-txt nl'>3 приоритет</option>
                        </select>
                        <label>Часы:</label>
                        <input type='number' id='hours' name='hours' value={editTodo.hours}></input>
                        <label>Минуты:</label>
                        <input type='number' id='minutes' name='minutes' value={editTodo.minutes}></input>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <input type='submit' className="btn register-form__btn" value='Сохранить'></input>
            <button className="btn register-form__btn" onClick={props.onHide}>Отмена</button>
            </Modal.Footer>
        </Modal>
        );
    }
    return (
        <>
            <li className="todo-list__item">
                <strong className="indef-of-task">{props.index + 1}.</strong>
                <span className="todo-list__item__container">
                    <div>
                        {/* <Link to={`/viewlist/${props.todos.id}`} className="todo-list__item__container__title">{props.todos.title}</Link> */}
                        <p className="todo-list__item__container__title">{props.todos.title}</p>
                        <p className="todo-list__item__container__description">{props.todos.description}</p>
                        {props.todos.date ? <p>Срок задачи до: {props.todos.date.split('T')[0]}</p> : null }
                        {props.todos.priority ? <p>Приоритет: {props.todos.priority}</p> : null}
                        {props.todos.hours && props.todos.minutes ? <p>Время на задачу: {props.todos.hours}ч {props.todos.minutes}мин</p> : null}
                    </div>
                </span>
                <button className="btn-change-task" variant="primary" onClick={() => setModalShow(props.todos.id)}>Редактировать</button>
                <input type='checkbox' className="chk-box__done" checked={completeTodos}  onChange={ () => completeTodos(props.todos.id)}></input>
            </li>
            <EditModalPage
            show={modalShow}
            onHide={() => setModalShow(null)}
            />
        </>
    )
}
