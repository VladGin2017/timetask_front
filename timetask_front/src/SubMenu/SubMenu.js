import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SubMenu() {
    const date = new Date();
    const dateNormalize = date.toISOString().split('T')[0];
    const [timeSum, setTimeSum] = useState('');

    useEffect(() => {
        axios.get('https://dev.timetask.ru/api/Time/', {params: {UserId: localStorage.getItem('token'), date: dateNormalize}} )
        .then (response => {
            const time = response.data;
            setTimeSum(time);
        })
    }, [])    
    return (
        <>  
            <nav className="submenu">
                <ul className="submenu__list">
                    <li className="submenu__item">
                        <NavLink to='/viewlist' className="submenu__link">Входящие</NavLink>
                    </li>
                    <li className="submenu__item">
                        <NavLink to='/today' className="submenu__link">Сегодня</NavLink>
                    </li>
                    <li className="submenu__item">
                        <NavLink to='/' className="submenu__link">Предстоящие</NavLink>
                    </li>
                    <li className="submenu__item">
                        <NavLink to='/' className="submenu__link">Календарь</NavLink>
                    </li>
                    <div className="submenu__vertical-line"></div>
                    <li className="submenu__item">
                        <NavLink to='/completed' className="submenu__link">Архив</NavLink>
                    </li>
                    <li className="submenu__item">
                        <NavLink to='/completed' className="submenu__link">Корзина</NavLink>
                    </li>
                    <div className="submenu__vertical-line"></div>
                </ul>
            </nav>
            <div className="submenu__time">
                <div className="submenu__time__item">{timeSum.hours}ч {timeSum.minutes}мин</div>
                <p className="submenu__time__description">Время на задачи</p> 
            </div>
        </>
    )
}