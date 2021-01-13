import React from 'react'
import { Navigate } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import LoginView from './views/auth/LoginView'
import LogoutView from './views/auth/LogoutView'
import RegisterView from './views/auth/RegisterView'
import NotFoundView from './views/NotFoundView'

import AppLayout from './layouts/AppLayout'
import PartView from './views/app/PartView'
const routes = [
    {
        path:'/',
        element: <MainLayout />,
        children: [
            { path: 'login', element: <LoginView /> },
            { path: 'logout', element: <LogoutView /> },
            { path: 'register', element: <RegisterView /> },
            { path: '404', element: <NotFoundView /> },
            { path: '/', element: <Navigate to="login" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    },
    {
        path:'app',
        element: <AppLayout />,
        children: [
             { path: 'parts', element: <PartView /> },
            // { path: 'elements', element: <ElementView /> },
            // { path: 'colors', element: <PartView /> },
            // { path: 'themes', element: <ThemeView /> },
            // { path: 'sets', element: <SetView /> },
            // { path: 'inventorys', element: <InventoryView /> },
            // { path: 'dashboard', element: <AppView /> },
            // { path: '404', element: <NotFoundView /> },
            // { path: '', element: <AppView /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
];

export default routes