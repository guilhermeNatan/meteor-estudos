import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormProfile from "./components/form/FormProfile";

class Profile extends Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                <FormProfile history={history} />
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;
