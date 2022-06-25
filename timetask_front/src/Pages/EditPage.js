import React, { useEffect, useState } from "react"
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

export default function EditModalPage(props) {
    const [editTodo, setEditTodo] = useState([]);
    useEffect(() => {
        axios.get('https://dev.timetask.ru/api/Task/Task/', {
            params: {id: props.id}
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
                <form  className='register-form__form'>
                    <input type='text' id='title' name='title' value={editTodo.title} placeholder='Название задачи' className="register-form__input" required></input>
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
        <input type='submit' className="btn register-form__btn" value='Редактировать'></input>
        <button className="btn register-form__btn" onClick={props.onHide}>Отмена</button>
        </Modal.Footer>
    </Modal>
    );
}