import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import styles from "./style";
import TextField from "@material-ui/core/TextField";
import {TDButton} from "/imports/ui/reuse/components/TDButton";
import Grid from '@material-ui/core/Grid';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import routerNames from "/imports/ui/navigation/RauterNames";
import FormProfileLogicModel from "./FormProfileLogicModel";
import SelectGender from "../selectsex/SelectGender";

class FormProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: null,
            nome: null,
            email: null,
            empresa: null,
            dataNascimento: null,
            genero: null
        }
    }


    setField = (fieldName, value) => this.setState({[fieldName]: value});

    validateConfirmPassword = () => {
        const {password, confirmPassword} = this.state;
        return password !== confirmPassword;
    };

    camposInformados = () => {
        const {nome, email, empresa, dataNascimento} = this.state;
        return true;
    };

    saveTask = () => {
        const {history, params: idTask} = this.props;
        FormProfileLogicModel.saveTask(this.state, idTask, (err) => {
            if (err) {
                this.setState({message: `Não foi cadastrar a tarefa: ${err.message}`})
            }
            return history.push(routerNames.TASKS)
        })
    };


    render() {
        const {history, taskForEdit} = this.props;

        const {data, hora} = this.state;
        return (
            <Grid item xs={12} md={12}>
                <Card style={styles.container}>
                    <CardHeader title="Perfil de usuário" style={{textAlign: 'center'}}/>
                    <CardContent>
                            <div style={styles.formContainer}>

                                <TextField id="nome"
                                           style={styles.textField}
                                           label="Nome"
                                           onChange={({target}) => this.setField('nome',
                                               target.value)}/>
                                <TextField id="email"
                                           style={styles.textField}
                                           label="Email"
                                           type="email"
                                           onChange={({target}) =>
                                               this.setField('email',
                                                   target.value)}/>
                                <TextField id="empresa"
                                           style={styles.textField}
                                           label="Empresa"
                                           onChange={({target}) =>
                                               this.setField('empresa',
                                                   target.value)}/>



                                <div style={styles.dateTime}>
                                    <SelectGender handleChange={({target}) =>
                                        this.setField('genero',
                                            target.value)} />


                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Data de nascimento"
                                            format="dd/MM/yyyy"
                                            value={taskForEdit ? taskForEdit.dataExecucao : data}
                                            onChange={(date) =>
                                                this.setField("dataNascimento", date)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>

                                </div>




                                <div style={styles.footer}>
                                    <TDButton title="Cancelar"
                                              type="secundary"
                                              styleProps={styles.button}
                                              onClick={() => history.goBack()}
                                    />
                                    <TDButton title="Salvar"
                                              type="primary"
                                              styleProps={styles.button}
                                              onClick={this.saveTask}
                                              disabled={!this.camposInformados()}
                                    />


                                </div>
                            </div>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}


FormProfile.propTypes = {
    history: PropTypes.object.isRequired,
    taskForEdit: PropTypes.object,
};
export default FormProfile;
