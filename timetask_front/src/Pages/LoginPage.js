import { Link } from "react-router-dom";
import AuthUser from "../Auth/AuthApp";

const LoginPage = () => {
    
    return (
        <div className="login-container">
            <AuthUser></AuthUser>
            <p className="login-description">
                Если еще не зарегистрированы, то <Link to="/register">зарегистрируйтесь!</Link>
            </p>
        </div>
    )
}

export default LoginPage;