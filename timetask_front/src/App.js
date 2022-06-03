import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import Register from './Pages/RegistrationPage'
import TodoListPage from "./Pages/TodosListPage";
import AllTasks from "./Pages/AllTodos";
import TodayTask from "./Pages/TodayTodos";
import CompletedTodo from "./Pages/CompletedTodos";
import NotFoundPage from "./Pages/NotFoundPage";

export default function App() {
        const classes = []

    return (
        <>  
            <header className='header'>
                {/* <div className='header__menu-container'>
                    <Link to='/viewlist'>Список задач</Link>
                </div> */}
            </header>
            <Routes>
                <Route path="/" element={<TodoListPage></TodoListPage>}></Route>
                {/* <Route path="/" element={<HomePage></HomePage>}></Route> */}
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/viewlist" element={<AllTasks></AllTasks>}></Route>
                <Route path="/today" element={<TodayTask></TodayTask>}></Route>
                <Route path="/completed" element={<CompletedTodo></CompletedTodo>}></Route>
                <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
            </Routes>
        </>
    )
}

//  {
//     if (localStorage.getItem('token')) {
//         return (
//         <div>
//             <header className="nav-menu">
//                 <div className="nav-menu__container">
//                     <Link to='/' className="nav-menu__link">Главная</Link>
//                     <Link to='/viewlist' className="nav-menu__link">Список задач</Link>
//                 </div>
//             </header>
//             <Routes>
//                 <Route path="/" element={<HomePage></HomePage>}></Route>
//                 <Route path="/login" element={<LoginPage></LoginPage>}></Route>
//                 <Route path="/register" element={<Register></Register>}></Route>
//                 <Route path="/viewlist" element={<TodoListPage></TodoListPage>}></Route>
//                 <Route path="/viewlist" element={<AllTasks></AllTasks>}></Route>
//                 <Route path="/today" element={<TodayTask></TodayTask>}></Route>
//                 <Route path="/completed" element={<CompletedTodo></CompletedTodo>}></Route>
//             </Routes>
//         </div>
//         )
//     } else {
//         return (
//             <div>
//                 <header className="nav-menu">
//                     <div className="nav-menu__container">
//                         <Link to='/login' className="nav-menu__link">Вход</Link>
//                         <Link to='/register' className="nav-menu__link">Регистрация</Link>
//                     </div>
//                 </header>
//                 <Routes>
//                     <Route path="/login" element={<LoginPage></LoginPage>}></Route>
//                     <Route path="/register" element={<Register></Register>}></Route>
//                 </Routes>
//             </div>
//             )
//     }
//     
