import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Header from './header/Header';
import Menu from './menu/Menu';
import styles from './style';

class Layout extends React.Component {
    render() {
        const { classes, theme, children, history } = this.props;



        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header classes={classes} theme={theme} />
                <Menu classes={classes} theme={theme} history={history} />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);
