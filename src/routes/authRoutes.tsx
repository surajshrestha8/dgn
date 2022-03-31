import React from "react";
import { lazy } from 'react';
import CreateRole from "../pages/roles/create-roles";
const HomePage = lazy(()=> import('../pages/home/homepage'));
const News = lazy(()=> import('../pages/news/news'));

interface RouteItem {
    id: number;
    path: string;
    element: React.ReactNode;
}
const authRoutes:Array<RouteItem> = [
    {
        id: 1,
        path: '/',
        element: <HomePage />,
    },
    {
        id: 2,
        path: '/news',
        element: <News />,
    },
    {
        id: 3,
        path: '/roles',
        element: <CreateRole />,
    }
]
export default authRoutes;