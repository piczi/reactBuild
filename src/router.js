
import React, { Suspense } from 'react';
import FlowerLoading from './components/common/flowerLoading';
import {
    BrowserRouter,
    Switch,
    IndexRoute,
    Route
} from 'react-router-dom'
import routes from './router.config.js'

const Router = () => (
    <BrowserRouter>
        <Suspense
            fallback={
                FlowerLoading
            }>
            <Switch>
                {
                    routes.map(({ path, component }) => {
                        return <Route
                            path={path}
                            key={path}
                            component={component}
                        />
                    })
                }
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default Router;
