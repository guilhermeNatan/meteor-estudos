import React from 'react';
import styles from './style';
import FormLogin from "./components/Form";


const Login = props => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>Bem vindo ao todolist</div>
            <FormLogin/>
        </div>
    );
};


export default Login;
