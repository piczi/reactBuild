import { lazy } from 'react';

const routes = [
    {
        path: '/test',
        component: lazy(() => import('./views/test/test')),
    },
]

export default routes;
