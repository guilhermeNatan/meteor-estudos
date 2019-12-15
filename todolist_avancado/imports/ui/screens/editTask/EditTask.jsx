import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style'
import FormTask from "./fom/FormTask";
import operations from "../../reuse/application/constans/Operations";
import { Tasks } from '/imports/api/tasks';
import { withTracker } from 'meteor/react-meteor-data';

class EditTask extends Component {


    render() {
        const { history, task } = this.props;
        return (
            <div style={styles.container}>
               <FormTask
                   history={history}
                    taskForEdit={task}
               />
            </div>
        );
    }
}

EditTask.propTypes = {
    history: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
};
// export default EditTask;
export default withTracker((props) => {
    const { params:{ operacao , idTask} } = props;
    if(operacao === operations.editar) {
        Meteor.subscribe('tasks');
        return {
            task: Tasks.findOne({_id: idTask}),
        };
    }
})(EditTask);
