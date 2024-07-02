import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
    const { currentUser } = useSelector((state) => state.user);
    const { currentAdmin } = useSelector((state) => state.admin);

    return currentUser || currentAdmin ? <Outlet/> : <Navigate to='/signin'/>
}

