import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './style';


function Mlink({ to, children }) {
    return (
        <Link to={to} style={styles.link}>
            {
                children
            }
        </Link>
    );
}

Mlink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};


export default withStyles(styles)(Mlink);
