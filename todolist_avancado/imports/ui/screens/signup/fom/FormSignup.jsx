import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import styles from "./style";
import TextField from "@material-ui/core/TextField";
import {TDButton} from "../../../reuse/components/TDButton";
import routerNames from '/imports/ui/navigation/RauterNames';
import {Meteor} from 'meteor/meteor';

class FormSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    createUser = () => {
        const {username, password} = this.state;
        const {history} = this.props;
        console.log(username, password);
        Meteor.call('users.create', username, password, (resp) => {
            console.log(resp)
            // history.push(routerNames.HOME)
        });
    };

    setField = (fieldName, value) => this.setState({[fieldName]: value});

    validateConfirmPassword = () => {
        const {password, confirmPassword} = this.state;
        return password !== confirmPassword;
    }

    render() {
        const {history} = this.props;

        return (
            <Card style={styles.container}>
                <CardHeader title="Cadastro"/>
                <CardContent>
                    <form >
                        <div style={styles.formContainer}>

                            <TextField id="login" label="Login"
                                       onChange={({target}) => this.setField('username',
                                           target.value)}/>
                            <TextField id="senha" label="Senha" type="password"
                                       onChange={({target}) => this.setField('password',
                                           target.value)}/>
                            <TextField id="confirm" error={this.validateConfirmPassword()}
                                       label="Confirmar senha" type="password"
                                       onChange={({target}) => this.setField('confirmPassword',
                                           target.value)}/>

                            <div style={styles.footer}>
                                <TDButton title="Cancelar" type="secondary"
                                          styleProps={styles.button}
                                          onClick={() => history.goBack()}
                                />
                                <TDButton title="Confirmar" type="primary"
                                          styleProps={styles.button}
                                          onClick={this.createUser}
                                />
                            </div>
                        </div>
                    </form>

                </CardContent>
            </Card>
        );
    }
}


FormSignup.propTypes = {
    history: PropTypes.object.isRequired,
};
export default FormSignup;
