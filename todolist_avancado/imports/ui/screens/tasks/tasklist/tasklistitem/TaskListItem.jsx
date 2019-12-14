import React, {Component} from 'react';
import {ListItem} from '@material-ui/core';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from 'prop-types';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Meteor} from 'meteor/meteor';
import routerNames from '/imports/ui/navigation/RauterNames';

class TaskListItem extends Component {
    deleteTask = () => {
        const { task } = this.props;
        Meteor.call('tasks.remove', task._id, (err) => {
            if (err) {
                this.setState({message: `Não foi possivel criar seu ususario: ${err.message}`})
            }
        });
    };
    editTask = () => {
        const { history, task } = this.props;
        history.push(`${routerNames.EDIT_TASK}/editar/${task._id}`)
    };
    render() {
        const { task } = this.props;
        return (
            <ListItem ContainerComponent="div">
                <ListItemAvatar>
                    <Avatar>
                        <SettingsIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={ `${task.descricao}`}
                              secondary={`${task.username} : : ${new Date(task.dataExecucao).toLocaleString()}`}  />
                <ListItemSecondaryAction>
                    <IconButton  onClick={this.deleteTask}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton onClick={this.editTask}>
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

TaskListItem.propTypes = {
    task: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default TaskListItem;
