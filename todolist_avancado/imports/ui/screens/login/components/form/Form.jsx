import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './style';
import {TDButton} from "../../../../reuse/components/TDButton";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import PropTypes from 'prop-types';
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
            message: ''
        }
    }


    login = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const { history } = this.props;
        Meteor.loginWithPassword(username, password, (error) =>   {
           if(Meteor.user()){
               history.push(routerNames.HOME)
           }else {
             this.setState({ message: 'Usuário inválido'})
           }

        })
    };

    setField = (fieldName, value) => this.setState({[fieldName]: value});

    render() {
        const { message } = this.state;
        return (
            <Card style={styles.container}>
                <CardContent>
                    <div style={styles.formContainer}>
                        <CardHeader title="Bem vindo ao TODO LIST" style={{textAlign: 'center'}}/>
                        <TextField id="standard-error" label="Login"
                                   onChange={({target}) => this.setField('username', target.value)} />
                        <TextField id="standard-error" type="password" label="Senha"
                                   onChange={({target}) => this.setField('password', target.value)} />
                        <TDButton title="Entrar" type="primary" styleProps={styles.button}
                                  onClick={this.login}
                        />

                        <div style={styles.message} >
                            {message }
                        </div>

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
