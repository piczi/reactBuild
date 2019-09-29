import { lazy } from 'react';

const routes = [
    {
        path: '/test',
        component: lazy(() => import('./views/test/test')),
    },
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
