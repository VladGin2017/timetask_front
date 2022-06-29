import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import Register from './Pages/RegistrationPage'
import TodoListPage from "./Pages/TodosListPage";
import IncomingTodos from "./Pages/IncomingTodos";
import TodayTask from "./Pages/TodayTodos";
import CompletedTodo from "./Pages/CompletedTodos";
import NotFoundPage from "./Pages/NotFoundPage";
import EditPage from "./Pages/EditPage";
import RemovedTodos from "./Pages/RemovedTodosPage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/ProviderAuth";

export default function App(props) {
    const navigate = useNavigate();
    function clearStorage() {
        localStorage.removeItem('token');
        navigate('/login', {replace: true} );
    }
    return (
        localStorage.getItem('token') ? (
            <>
                <header className='header'>
                    <ul className="header__menu">
                            <li><Link to="/" className="nav-menu__link">Главная</Link></li>
                            <li><Link to="/viewlist" className="nav-menu__link">Список задач</Link></li>
                    </ul>
                    <button className="btn btn-logout" onClick={() => clearStorage()}>
                                Выход
                    </button>
                </header>
                <div>
                    <AuthProvider>
                        <Routes>
                            <Route path="/" element={<HomePage></HomePage>}></Route>
                            <Route path="/login/" element={<LoginPage></LoginPage>}></Route>
                            <Route path="/register" element={<Register></Register>}></Route>
                            <Route path="/viewlist" element={<IncomingTodos></IncomingTodos>}></Route>
                            <Route path="/viewlist/:id" element={<EditPage></EditPage>}></Route>
                            <Route path="/today" element={<TodayTask></TodayTask>}></Route>
                            {/* <Route path="/today" element={<RequireAuth>
                                    <TodayTask></TodayTask>
                                </RequireAuth>}></Route> */}
                            <Route path="/completed" element={<CompletedTodo></CompletedTodo>}></Route>
                            <Route path="/removed_todo" element={<RemovedTodos></RemovedTodos>}></Route>
                            <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
                        </Routes>
                    </AuthProvider>
                </div>  
            </>
        ) : (
            <>  
                <header className='header'>
                    <ul className="header__menu">
                            <li><Link to="/register" className="nav-menu__link">Регистрация</Link></li>
                            <li><Link to="/login" className="nav-menu__link">Вход</Link></li>
                            {/* <li><Link to="/viewlist" className="nav-menu__link">Список задач</Link></li> */}
                    </ul>
                </header>
                    <Routes>
                        <Route path="/register" element={<Register></Register>}></Route>
                        <Route path="/login/" element={<LoginPage></LoginPage>}></Route>                             
                        <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
                    </Routes>
            </>
        )
    )
}
