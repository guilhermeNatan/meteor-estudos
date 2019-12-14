import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import { ListItem } from '@material-ui/core';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from '@material-ui/icons/Settings';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class TaskListItem extends Component {
    render() {

        return (
            <ListItem  ContainerComponent="div">
                <ListItemAvatar>
                    <Avatar>
                        <SettingsIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Single-line item"/>
                <ListItemSecondaryAction>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

TaskListItem.propTypes = {

};

export default TaskListItem;
