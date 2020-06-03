
import * as React from 'react';
import { Suspense } from 'react';
import FlowerLoading from './components/flowerLoading/index';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import routes from './router.config';

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
