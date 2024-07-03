import { Navigate, Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <div>
            <div>
                Layout
            </div>
            <Outlet />
        </div>
    )
}