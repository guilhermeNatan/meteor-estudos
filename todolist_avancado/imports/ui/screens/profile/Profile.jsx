import React, {Component} from 'react';
import FormProfile from "./components/form/FormProfile";
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';


class Profile extends Component {


    render() {
        const { history, userProfile } = this.props;
        return (
            <div>
                <FormProfile
                    history={history}
                    userProfile={userProfile}
                />


            </div>
        );
    }
}

Profile.propTypes = {};

export default withTracker(() => {
    const userMeteor =  Meteor.user();

    if(userMeteor) {
        return {
            userProfile: Meteor.user().profile,
        };
    }

})(Profile);
