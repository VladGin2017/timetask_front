import React, {useContext, useState} from "react";
import Context from "../context";
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

export default function TodoItem(props) {
    const { completeTodos } = useContext(Context);
    const [modalShow, setModalShow] = useState(false);
    const {id} = useParams();
    
    function MyVerticallyCenteredModal(props) {
        return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                <p>{id}</p>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in,{id} egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>
            </Modal.Body>
            <Modal.Footer>
            <button onClick={props.onHide}>Close</button>
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
                        <Link to={`/viewlist/${props.todos.id}`} className="todo-list__item__container__title">{props.todos.title}</Link>
                        <p className="todo-list__item__container__description">{props.todos.description}</p>
                        {props.todos.date ? <p>Срок задачи до: {props.todos.date.split('T')[0]}</p> : null }
                        {props.todos.priority ? <p>Приоритет: {props.todos.priority}</p> : null}
                        {props.todos.hours && props.todos.minutes ? <p>Время на задачу: {props.todos.hours}ч {props.todos.minutes}мин</p> : null}
                    </div>
                </span>
                <button className="btn-change-task" variant="primary" onClick={() => setModalShow(true)}>Редактировать</button>
                <input type='checkbox' className="chk-box__done" checked={completeTodos}  onChange={ () => completeTodos(props.todos.id)}></input>
            </li>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </>
    )
}
