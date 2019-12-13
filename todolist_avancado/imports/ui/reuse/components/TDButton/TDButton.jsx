import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './style'
import PropTypes from 'prop-types';

const TDButton = ({title, type, styleProps, ...props}) => {

    let style = {
        ...styles.container,
        ...styles[type],
        ...styleProps,
    }

    if (props.disabled) {
        style = {...style, ...styles.disabled}
    }

    return (
        <Button variant="contained" style={style}
                {...props}>
            {title}
        </Button>
    );
};

TDButton.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    styleProps: PropTypes.object,
};
export default TDButton;
