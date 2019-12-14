import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import TaskList from './tasklist/TaskList';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '/imports/api/tasks';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core';



class TasksScreen extends Component {
    render() {
        const { tasks,  classes } = this.props;
        console.log(tasks)
        return (
            <div style={styles.container}>
                <TaskList tasks={tasks} />
                <Fab color="primary"  className={classes.fab} aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

TasksScreen.propTypes = {

};


const tracker = withTracker(() => {
    Meteor.subscribe('tasks');
    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 }}).fetch(),
        incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
        currentUser: Meteor.user(),
    };
})(TasksScreen);

export default withStyles(styles)(tracker);
