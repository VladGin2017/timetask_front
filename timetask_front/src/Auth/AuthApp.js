import React, { useState } from "react";
import axios from "axios";
import {useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AuthUser() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userToken, setUserToken] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    // const {signin} = useAuth();
    const fromPage = location.state?.from?.pathname || '/'; 


    function handleSubmit(e) {
        e.preventDefault();
        axios.post('https://dev.timetask.ru/api/Account/Login', {  
                                                        email: email,
                                                        password: password})
            .then(res => {
                if (res.data.errors) {
                    alert(res.data.errors);
                }
                if (res.data.id) {
                    setUserToken(res.data.id);
                    localStorage.setItem('token', res.data.id);
                    // signin(userToken, () => navigate(fromPage, {replace: true}));
                    // navigate('/today', {require: true});
                }
            })
        }
    
            return (
                <div className="register-form__container">
                    <h2 className="register-form__heading">Вход:</h2>
                    <form onSubmit={handleSubmit} className='register-form__form'>
                        <input type='email' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className="register-form__input"></input>
                        <input type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' className="register-form__input"></input>
                        <input type='submit' className="btn register-form__btn"></input>
                    </form>
                </div>
            )
}