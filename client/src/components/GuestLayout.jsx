import { Navigate, Outlet } from "react-router-dom";

export default function GuestLayout() {

    return (
        <div>
            <div>
                Layout
            </div>
            <Outlet />
        </div>
    )
}