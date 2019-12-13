import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    'users.create'(username, password) {
        return Accounts.createUser({username, password})
    },
})
