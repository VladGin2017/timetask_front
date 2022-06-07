import React from "react";
import { NavLink } from "react-router-dom";

export default function SubMenu() {
    return (
        <div className="submenu__container">
            <div className="submenu__list">
                <NavLink to='/viewlist' className="submenu__item">Входящие</NavLink>
                <NavLink to='/today' className="submenu__item">Сегодня</NavLink>
                <NavLink to='' className="submenu__item">Завтра</NavLink>
                <NavLink to='/completed' className="submenu__item">Выполненные</NavLink>
            </div>
        </div>
    )
}