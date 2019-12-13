import React from 'react';
import styles from './style';
import FormLogin from "./components/form/Form";


const Login = props => {
    return (
        <div style={styles.container}>
            <FormLogin history={props.history}/>
        </div>
    );
};


export default Login;
