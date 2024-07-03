import {createBrowserRouter} from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter ([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default router;