import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import { Login } from '../screens/login'
import { Home } from '../screens/home'
import { Signup } from '../screens/signup'

const browserHistory = createBrowserHistory();
class Rotas extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path="/" component={ Login }/>
                    <Route exact path="/home" component={ Home }/>
                    <Route exact path="/signup" component={ Signup }/>
                </Switch>
            </Router>
        );
    }
}


export default Rotas;
