
import React, { Suspense } from 'react'
import FlowerLoading from './components/common/flowerLoading';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom'
import routes from './router.config.js'

const Router = () => (
    <BrowserRouter>
        <Suspense
            fallback={
                FlowerLoading
            }>
            {
                routes.map(({ path, component }) => {
                    console.log(path,component);
                    return <Route
                        path={path}
                        key={path}
                        component={component}
                    />
                })
            }
        </Suspense>
    </BrowserRouter>
)

export default Router;
