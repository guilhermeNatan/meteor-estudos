import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import styles from "../../login/components/style";
import TextField from "@material-ui/core/TextField";
import {TDButton} from "../../../reuse/components/TDButton";
import { Accounts } from 'meteor/accounts-base'

const FormSignup = ({history}) => {
    return (
        <Card style={styles.container}>
            <CardHeader title="Cadastro"/>
            <CardContent>
                <div style={styles.formContainer}>
                    <TextField id="standard-error" label="Login"/>
                    <TextField id="standard-error" label="Senha"/>
                    <TextField id="standard-error" label="Confirmar senha"/>

                    <div style={styles.footer}>
                        <TDButton title="Cancelar" type="secondary" styleProps={styles.button}
                                  onClick={() => history.goBack()}
                        />
                        <TDButton title="Confirmar" type="primary" styleProps={styles.button}
                                  onClick={() =>  Accounts.createUser({username: "capela", password: "123456"}, ()=> console.log("usuario criado"))}
                        />

                        <TDButton title="Foo" type="secondary" styleProps={styles.button}
                                  onClick={() =>Accounts.findUserByUsername("capela")}
                        />

                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

FormSignup.propTypes = {
    history: PropTypes.object.isRequired,
};
export default FormSignup;
