import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Typography from '@material-ui/core/Typography';
import style from './style';


class Header extends Component {
    render() {
        const {classes} = this.props;
        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar style={style.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" color="inherit" component="p" noWrap>
                        {'Bem vindo ao Todo List Avançado'}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}



export default Header;
