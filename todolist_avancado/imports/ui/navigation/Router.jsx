import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routerNames from '/imports/ui/navigation/RauterNames';
import createBrowserHistory from 'history/createBrowserHistory';
import { Login } from '../screens/login'
import { Home } from '../screens/home'
import { Signup } from '../screens/signup'
import Layout from "../reuse/components/layout/Layout";

const browserHistory = createBrowserHistory();

const renderizarComLayoutPadrao = Componente => props => (
    <Layout>
        <Componente
            params={props.match.params}
            router={props}
            history={history}
        />
    </Layout>
);


class Rotas extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path={routerNames.BEGIN} component={ Login }/>
                    <Route exact path={routerNames.SIGNUP} component={ Signup }/>
                    <Route exact path={routerNames.HOME} component={ renderizarComLayoutPadrao(Home) }/>
                </Switch>
            </Router>
        );
    }
}


export default Rotas;
