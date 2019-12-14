import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import styles from "./style";
import TextField from "@material-ui/core/TextField";
import {TDButton} from "../../../reuse/components/TDButton";
import Grid from '@material-ui/core/Grid';
import {
    KeyboardDatePicker,
    KeyboardTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import routerNames from "../../../navigation/RauterNames";
import FormTaskModlLogic from "./FormTaskModlLogic";

class FormTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: null,
            descricao: null,
            data: new Date(),
            hora: new Date(),
            message: null
        }
    }


    setField = (fieldName, value) => this.setState({[fieldName]: value});

    validateConfirmPassword = () => {
        const {password, confirmPassword} = this.state;
        return password !== confirmPassword;
    };

    camposInformados = () => {
        const {nome, descricao} = this.state;
        return nome && descricao;
    };

    saveTask = () => {
        const {history} = this.props;
        FormTaskModlLogic.saveTask(this.state, (err) => {
            if (err) {
                this.setState({message: `Não foi cadastrar a tarefa: ${err.message}`})
            }
            return history.push(routerNames.TASKS)
        })
    };

    render() {
        const {history} = this.props;
        const {data, hora} = this.state;
        return (
            <Grid item xs={12} md={12}>
                <Card style={styles.container}>
                    <CardHeader title="Cadastre uma tarefa" style={{textAlign: 'center'}}/>
                    <CardContent>
                        <form>
                            <div style={styles.formContainer}>
                                <TextField id="nome"
                                           style={styles.textField}
                                           label="Dê um nome bonito para sua tarefa"
                                           onChange={({target}) => this.setField('nome',
                                               target.value)}/>
                                <TextField id="descricao"
                                           style={styles.textField}
                                           label="Descreva sua tarefa aqui"
                                           onChange={({target}) =>
                                               this.setField('descricao',
                                                   target.value)}/>


                                <div style={styles.dateTime}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Data"
                                            format="dd/MM/yyyy"
                                            value={data}
                                            onChange={(date) =>
                                                this.setField("data", date)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Hora"
                                            value={hora}
                                            onChange={(time) =>
                                                this.setField("hora", time)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
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
                        </form>

                    </CardContent>
                </Card>
            </Grid>
        );
    }
}


FormTask.propTypes = {
    history: PropTypes.object.isRequired,
};
export default FormTask;
