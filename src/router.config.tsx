import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('./views/home/home')),
    },
    {
        path: '*',
        component: lazy(() => import('./views/home/home')),
    },
]

export default routes;
