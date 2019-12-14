import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import TaskList from './tasklist/TaskList';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '/imports/api/tasks';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core';
import routerNames from '/imports/ui/navigation/RauterNames';


class TasksScreen extends Component {
    render() {
        const { tasks,  classes, history } = this.props;
        console.log(tasks)
        return (
            <div style={styles.container}>
                <TaskList tasks={tasks} history={history} />
                <Fab color="primary"
                     className={classes.fab}
                     aria-label="add"
                     onClick={()=> history.push(routerNames.EDIT_TASK.criar())}>
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

TasksScreen.propTypes = {
    tasks: PropTypes.array,
    classes: PropTypes.object,
    history: PropTypes.object,
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
