import React, { useState, useContext } from "react";
import Context from "../context";

export default function AddTodoApp() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [priority, setPriority] = useState();
    const { addTodo } = useContext(Context);

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(title, description, date, priority);
        }
        return (
            <div className="register-form__container">
                <form onSubmit={handleSubmit} className='register-form__form'>
                    <input type='text' id='title' name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder='Название задачи' className="register-form__input" required></input>
                    <textarea type='text' id='description' name='description' value={description} onChange={e => setDescription(e.target.value)} placeholder='Описание задачи' className="register-form__input" rows='10' cols='50' required></textarea>
                    <label for='date'>Срок выполнения задачи:</label>
                    <input type='date' id='date' name='date' value={date} onChange={e => setDate(e.target.value)} required></input>
                    <label for='priority'>Приоритет задачи:</label>
                    <select name='priority' id='priority' value={priority} onChange={e => setPriority(e.target.value)}>
                        <option value='0' className='priority-txt ft'>0 приоритет</option>
                        <option value='1' className='priority-txt hd'>1 приоритет</option>
                        <option value='2' className='priority-txt md'>2 приоритет</option>
                        <option value='3' className='priority-txt nl'>3 приоритет</option>
                    </select>
                    <input type='submit' className="btn register-form__btn" value='+ Добавить'></input>
                </form>
            </div>
            
        )
    }
