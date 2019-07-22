import React from 'react'
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
]

export default routes;

