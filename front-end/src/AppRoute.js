import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppRoutes } from './routes';
import Loading from './app/component/page/Loading'
import LoginForm from './feature/user/LoginForm'

class FrontEndRoute extends Component {
    getRoute = () => {
        return AppRoutes.map((route, index) => {
            const { id, component: BaseComponent, exact, fullScreen } = route;
            return (
                <Route
                    key={index}
                    exact={exact}
                    path={id}
                    render={(props) => {
                        return (
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }} className="container">
                                <BaseComponent {...props} />
                            </div>
                        )
                    }}
                />
            );
        });
    }

    render() {
        const routes = this.getRoute();
        return (
            <Suspense fallback={<Loading />}>
                <Switch>
                    {/* <Redirect from="/" to="/dashboard" exact />                     */}
                    {routes}
                </Switch>

            </Suspense >
        );
    }
}

export default FrontEndRoute;