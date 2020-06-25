import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext, useEffect } from "react";
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PublicLayouts from './app/component/layouts/PublicLayouts';
import appStore from "./AppStore";
import ModalContainer from './app/common/modals/ModalContainer';
import { ToastContainer } from 'react-toastify';
import { RootStoreContext } from './app/stores/rootStore';
import Loading from './app/component/page/Loading';
import LayoutPage from './app/component/layouts/LayoutPage';

const App = () => {
    const rootStore = useContext(RootStoreContext);
    const { setAppLoaded, token, appLoaded } = rootStore.commonStore;
    const { getUser } = rootStore.userStore;

    useEffect(() => {
        if (token) {
            getUser().finally(() => setAppLoaded())
        } else {
            setAppLoaded()
        }
    }, [getUser, setAppLoaded, token])
    if (!appLoaded) return <Loading />
    return (
        <Fragment>
            <ModalContainer />
            <ToastContainer position='top-right' />
            <Provider store={appStore}>
                <Router>
                    <Switch>
                        <Redirect from="/" to="/dashboard" exact />
                        <Route path="/dashboard" render={PublicLayouts} exact={true} />
                        <Route path="/gioi-thieu" render={PublicLayouts} exact={true} />
                        <Route path="/thong-tin-chia-se" render={PublicLayouts} exact={true} />
                        <Route path="/tin-tuc" render={PublicLayouts} exact={true} />
                        <Route path="/login" render={PublicLayouts} exact={true} />
                        <LayoutPage />
                    </Switch>

                </Router>
            </Provider>
        </Fragment>
    );
};

export default observer(App);
