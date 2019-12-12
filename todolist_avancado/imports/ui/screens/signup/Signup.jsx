import React from 'react';
import PropTypes from 'prop-types';
import FormSignup from "./fom/FormSignup";
import styles from './style'

const Signup = props => {
    return (
        <div style={styles.container}>
            <FormSignup history={props.history}/>
        </div>
    );
};

Signup.propTypes = {
    history: PropTypes.object.isRequired
};
export default Signup;
