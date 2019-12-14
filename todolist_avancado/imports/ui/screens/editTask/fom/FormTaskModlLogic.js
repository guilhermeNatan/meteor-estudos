import {Meteor} from 'meteor/meteor';

export default  class FormTaskModlLogic {

   static  saveTask = ({ nome, descricao, data, hora }, id,  callBack) => {
        const dataTarefa = new Date(data);
        const horaTarefa = new Date(hora);
        const dataExecucao = new Date (dataTarefa.getFullYear(),
            dataTarefa.getMonth(), dataTarefa.getDate(), horaTarefa.getHours(),
            horaTarefa.getMinutes());
        if(id) {
            Meteor.call('tasks.update', id, nome, descricao, dataExecucao, callBack);
        }else {
            Meteor.call('tasks.insert', nome, descricao, dataExecucao, callBack);
        }
    }
}
