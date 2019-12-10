import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './style';


const FormLogin = props => {
    return (
        <div style={styles.container}>
            <TextField  id="standard-error" label="Login"    />
            <TextField  id="standard-error" label="Senha"    />
        </div>
    );
};

FormLogin.propTypes = {

};

export default FormLogin;
