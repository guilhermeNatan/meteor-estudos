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
            username: null,
            password: null,
            confirmPassword: null,
            message: null
        }
    }

    createUser = () => {
        const {username, password} = this.state;
        const {history} = this.props;
        Meteor.call('users.create', username, password, (err) => {
            if (err) {
                this.setState({message: `Não foi possivel criar seu ususario: ${err.message}`})
            }
            return history.push(routerNames.HOME)
        });
    };

    setField = (fieldName, value) => this.setState({[fieldName]: value});

    validateConfirmPassword = () => {
        const {password, confirmPassword} = this.state;
        return password !== confirmPassword;
    };
    camposInformados = () => {
        const {username, password, confirmPassword} = this.state;
        return username && password && confirmPassword;
    };

    enableConfirm = () => !this.validateConfirmPassword() && this.camposInformados();

    render() {
        const {history} = this.props;

        return (
            <Card style={styles.container}>
                <CardHeader title="Cadastro" style={{textAlign: 'center'}}/>
                <CardContent>
                    <form>
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
                                <TDButton title="Cancelar"
                                          type="secundary"
                                          styleProps={styles.button}
                                          onClick={() => history.goBack()}
                                />
                                <TDButton title="Confirmar"
                                          type="primary"
                                          styleProps={styles.button}
                                          onClick={this.createUser}
                                          disabled={!this.enableConfirm()}
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
