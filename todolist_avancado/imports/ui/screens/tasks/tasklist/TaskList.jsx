import React, {Component} from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import TaskListItem from './tasklistitem/TaskListItem'
import styles from './style';
import PropTypes from 'prop-types';

class TaskList extends Component {
    renderTasks = () => {
        const { tasks, currentUser } = this.props;
        return tasks.map((task) => {
            const currentUserId = currentUser && currentUser._id;
            const showPrivateButton = task.owner === currentUserId;
            return (
                <TaskListItem key={task._id}
                      task={task}
                      showPrivateButton={showPrivateButton} />
            )
        });
    }
    render() {
        return (
            <Grid item xs={12} md={12}>
                <List style={styles.list}>
                    {
                        this.renderTasks()
                    }
                </List>
            </Grid>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default TaskList;
