import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

const Tile = ({text, metric}) => {
    return (
        <div style={styles.container}>
            <div style={styles.titleTile}>
                {text}
            </div>
            <div style={styles.metric}>
                {metric}
            </div>
        </div>
    );
};

Tile.propTypes = {
    text: PropTypes.string.isRequired,
    metric: PropTypes.string,
};

export default Tile;
