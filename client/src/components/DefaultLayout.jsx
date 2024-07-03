import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const { token } = useStateContext();

    if(!token) {
        return <Navigate to='/login' />
    }

    return (
        <div id="defaultLayout">
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        
                        <a href="#" className="btn-logout"> Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}