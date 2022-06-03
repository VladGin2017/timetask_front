import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <p>Такой страницы не существует. Перейдите на <Link to='/'>главную страницу</Link>.</p>
        </div>
    )
}