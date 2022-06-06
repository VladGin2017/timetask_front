import React from "react";
import { Link } from "react-router-dom";

export default function SubMenu() {
    return (
        <div className="submenu__container">
            <div className="submenu__list">
                <Link to='/viewlist' className="submenu__item">Входящие</Link>
                <Link to='/today' className="submenu__item">Сегодня</Link>
                <Link to='' className="submenu__item">Завтра</Link>
                <Link to='/completed' className="submenu__item">Выполненные</Link>
            </div>
        </div>
    )
}