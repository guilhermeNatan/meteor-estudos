import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './style';
import {TDButton} from "../../../reuse/components/TDButton";
import {Card, CardContent} from "@material-ui/core";
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';
import {
    Link
} from "react-router-dom";
import routerNames from '/imports/ui/navigation/RauterNames';


class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }


    login = () => {
        const { username, password } = this.state;
        const { history } = this.props;
        Meteor.loginWithPassword(username, password, (resp) =>   {
            console.log(resp)
            // history.push(routerNames.HOME)
        })
    }

    render() {

        return (
            <Card style={styles.container}>
                <CardContent>
                    <div style={styles.formContainer}>
                        <TextField id="standard-error" label="Login"/>
                        <TextField id="standard-error" type="password" label="Senha"/>
                        <TDButton title="Entrar" type="primary" styleProps={styles.button}
                                  onClick={this.login}
                        />

                        <div style={styles.footer}>
                            <Link style={styles.session}>
                                Recuperar senha
                            </Link>
                            <Link to={routerNames.SIGNUP} style={styles.session}>
                                Fazer Cadastro
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

FormLogin.propTypes = {
    history: PropTypes.object
};

export default FormLogin;
