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
import { Tasks } from '../screens/tasks'
import Layout from "../reuse/components/layout/Layout";

const browserHistory = createBrowserHistory();

const renderizarComLayoutPadrao = Componente => props => (
    <Layout history={props.history}>
        <Componente
            params={props.match.params}
            router={props}
            history={props.history}
        />
    </Layout>
);

export const renderizarComLayoutLogin = Componente => (props) => {
    const elemento = (<Componente params={props.match.params} {...props} />);
    return (
        <div>
            {
                elemento
            }
        </div>
    );
};

const login = renderizarComLayoutLogin(Login);
const signup = renderizarComLayoutLogin(Signup);
const home = renderizarComLayoutPadrao(Home);
const tasks =  renderizarComLayoutPadrao(Tasks);

class Rotas extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path={routerNames.BEGIN} component={ login }/>
                    <Route exact path={routerNames.SIGNUP} component={ signup }/>
                    <Route exact path={routerNames.HOME} component={ home }/>
                    <Route exact path={routerNames.TASKS} component={ tasks  }/>
                </Switch>
            </Router>
        );
    }
}


export default Rotas;
