import {useLocation, Navigate} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth;

    if (!user) {
        return <Navigate to ='/login' state={{from: location}}></Navigate>
    }

    return children;
}  

export {RequireAuth};