import React, {Component} from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MLink from '../mlink/MLink';
import routerNames from '/imports/ui/navigation/RauterNames';
import PropTypes from "prop-types";

class Menu extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    logout = event => {
        const {history} = this.props;
        event.preventDefault();

        Meteor.logout(() => {
            history.push(routerNames.BEGIN)
            console.log('logout')
        });
    };

    render() {
        const {classes, theme} = this.props;
        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    <MLink to={routerNames.HOME}>
                        <ListItem button key="home">
                            <ListItemIcon>{<Home/>}</ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </MLink>
                    <MLink to={routerNames.TASKS}>
                        <ListItem button key="home">
                            <ListItemIcon>{<Settings/>}</ListItemIcon>
                            <ListItemText primary="Tarefas"/>
                        </ListItem>
                    </MLink>
                    <MLink to={routerNames.PROFILE}>
                        <ListItem button key="profile">
                            <ListItemIcon>{<AccountCircle/>}</ListItemIcon>
                            <ListItemText primary="Perfil"/>
                        </ListItem>
                    </MLink>
                </List>
                <Divider/>

                <List>
                    <ListItem button key="home" onClick={this.logout}>
                        <ListItemIcon>{<ExitToApp/>}</ListItemIcon>
                        <ListItemText primary="Sair"/>
                    </ListItem>
                </List>

            </div>
        );


        return (
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        container={this.props.container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default Menu;
