import {Meteor} from 'meteor/meteor';
0
export default  class FormTaskModlLogic {

   static  saveTask = ({ nome, descricao, data, hora },  callBack) => {
        const dataTarefa = new Date(data);
        const horaTarefa = new Date(hora);
        const dataExecucao = new Date (dataTarefa.getFullYear(),
            dataTarefa.getMonth(), dataTarefa.getDate(), horaTarefa.getHours(),
            horaTarefa.getMinutes());
        Meteor.call('tasks.insert', nome, descricao, dataExecucao, callBack);
    }
}
