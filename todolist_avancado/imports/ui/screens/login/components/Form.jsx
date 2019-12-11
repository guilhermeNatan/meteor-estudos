import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './style';
import {TDButton} from "../../../reuse/components/TDButton";
import {Card, CardContent } from "@material-ui/core";
import PropTypes from 'prop-types';
import {
    Link
} from "react-router-dom";


const FormLogin = ({history}) => {

    return (

        <Card style={styles.container}>
            <CardContent>
                <div style={styles.formContainer}>
                    <TextField id="standard-error" label="Login"/>
                    <TextField id="standard-error" label="Senha"/>
                    <TDButton title="Entrar" type="primary" styleProps={styles.button}
                        onClick={()=> history.push('/home')}
                    />

                    <div style={styles.footer}>
                        <Link  style={styles.session}>
                            Recuprar senha
                        </Link>
                        <Link  to="/signup" style={styles.session}>
                            Fazer Cadastro
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>

    );
};

FormLogin.propTypes = {
    history: PropTypes.object
};

export default FormLogin;
