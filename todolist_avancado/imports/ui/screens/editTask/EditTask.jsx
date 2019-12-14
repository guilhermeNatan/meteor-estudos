import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style'
import FormTask from "./fom/FormTask";

class EditTask extends Component {
    render() {
        const { history } = this.props;
        return (
            <div style={styles.container}>
               <FormTask history={history} />
            </div>
        );
    }
}

EditTask.propTypes = {};

export default EditTask;
