import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
    'user.updateProfile'({nome, email, empresa, genero,  dataNascimento}) {
        check(nome, String);
        check(email, String);
        check(empresa, String);
        if(!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        Meteor.users.update(this.userId, {$set: { profile: { nome, email, empresa, dataNascimento, genero  }}})
    },

    'user.getProfile'() {
        if(!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        return  Meteor.users.findOne(this.userId)
    }

})
