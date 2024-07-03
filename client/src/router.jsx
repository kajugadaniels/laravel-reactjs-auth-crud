import {createBrowserRouter} from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Users from './pages/Users.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import DefaultLayout from './components/DefaultLayout.jsx';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/users',
                element: <Users />,
            },
        ]
    },

    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element:  <Register />,
            }
        ]
    },
]);

export default router;