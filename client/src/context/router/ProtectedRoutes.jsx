import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext"

function ProtectedRoutes() {
    const {isAuthenticated, loading} = useAuth();

    console.log(loading, isAuthenticated);
    
    if(loading) return <h1>Loading...</h1>;

    if(!loading && !isAuthenticated) return <Navigate to='/login' replace />

    return <Outlet />
}

export default ProtectedRoutes