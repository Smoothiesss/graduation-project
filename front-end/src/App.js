import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext, useEffect } from "react";
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import FrontEndLayout from './app/component/layouts/FrontendLayout';
import appStore from "./AppStore";
import ModalContainer from './app/common/modals/ModalContainer';
import { ToastContainer } from 'react-toastify';
import { RootStoreContext } from './app/stores/rootStore';
import Loading from './app/component/page/Loading';

const App = () => {
    const rootStore = useContext(RootStoreContext);
    console.log(rootStore)
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
                    <Route path="/" component={FrontEndLayout} />
                </Router>
            </Provider>
        </Fragment>
    );
};

export default observer(App);
