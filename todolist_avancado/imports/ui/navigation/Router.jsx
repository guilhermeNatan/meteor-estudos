import React, {Component} from 'react';
import {Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Login } from '../screens/login'
import { Home } from '../screens/home'

const browserHistory = createBrowserHistory();
class Rotas extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path="/" component={ Login }/>
                    <Route exact path="/home" component={ Home }/>
                </Switch>
            </Router>
        );
    }
}


export default Rotas;
