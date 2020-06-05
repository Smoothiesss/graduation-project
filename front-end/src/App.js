import { observer } from 'mobx-react-lite';
import React, { Fragment } from "react";
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Layout from './app/component/Layout';
import appStore from "./AppStore";
const App = () => {

    return (
        <Fragment>
            <Provider store={appStore}>
                <Router>
                    <Layout />
                </Router>
            </Provider>
        </Fragment>
    );
};

export default observer(App);
