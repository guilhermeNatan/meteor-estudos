import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import styles from "./style";
import TextField from "@material-ui/core/TextField";
import {TDButton} from "/imports/ui/reuse/components/TDButton";
import Grid from '@material-ui/core/Grid';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SelectGender from "../selectsex/SelectGender";
import FileUpload from "../../../../reuse/components/fileupload/FileUpload";
import CardMedia from '@material-ui/core/CardMedia';

class FormProfile extends Component {

    constructor(props) {
        super(props);
        const {userProfile} = props;
        this.state = {
            isEditing: false,
            message: null,
            nome: userProfile ? userProfile.nome : null,
            email: userProfile ? userProfile.email : null,
            empresa: userProfile ? userProfile.empresa : null,
            dataNascimento: userProfile ? userProfile.dataNascimento : new Date(),
            genero: userProfile ? userProfile.genero : null,
            photo: userProfile ? userProfile.photo : null,
        }
    }


    setField = (fieldName, value) => this.setState({[fieldName]: value});

    validateConfirmPassword = () => {
        const {password, confirmPassword} = this.state;
        return password !== confirmPassword;
    };


    save = () => {
        Meteor.call('user.updateProfile', this.state, (err) => {
            let message = 'Perfil atualizado com sucesso!'
            if (err) {
                message = `Não foi possível atualizar seu perfil: ${err.message}`
            }
            console.log(err)
            this.setState({message, isEditing: false})
        })
    };

    uploadPhoto = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            Meteor.call('user.updatePhoto',event.target.result, () => {
                    this.setField('photo', event.target.result)
                }
            );
        }
        reader.readAsDataURL(file);
    };


    render() {
        const {message, isEditing, dataNascimento, nome, email, empresa, genero, photo} = this.state;
        return (
            <Grid item xs={12} md={12}>
                <Card style={styles.container}>
                    <CardHeader title="Perfil de usuário" style={{textAlign: 'center'}}/>
                    {/*<img src={data} alt="Red dot" />*/}
                    {
                        photo &&
                        <CardMedia
                            image={photo}
                            component="img"
                            style={{
                                height: '200px'
                            }}
                            title="Foto de perfil"
                        />
                    }
                    <CardContent>
                        <div style={styles.formContainer}>

                            <TextField id="nome"
                                       style={styles.textField}
                                       label="Nome"
                                       disabled={!isEditing}
                                       defaultValue={nome}
                                       onChange={({target}) => this.setField('nome',
                                           target.value)}/>
                            <TextField id="email"
                                       style={styles.textField}
                                       label="Email"
                                       disabled={!isEditing}
                                       defaultValue={email}
                                       type="email"
                                       onChange={({target}) =>
                                           this.setField('email',
                                               target.value)}/>
                            <TextField id="empresa"
                                       style={styles.textField}
                                       disabled={!isEditing}

                                       label="Empresa"
                                       defaultValue={empresa}
                                       onChange={({target}) =>
                                           this.setField('empresa',
                                               target.value)}/>


                            <div style={styles.dateTime}>
                                <SelectGender
                                    handleChange={({target}) =>
                                        this.setField('genero',
                                            target.value)}
                                    defaultValue={genero}
                                    disabled={!isEditing}
                                />
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Data de nascimento"
                                        disabled={!isEditing}
                                        format="dd/MM/yyyy"
                                        value={dataNascimento}
                                        onChange={(date) =>
                                            this.setField("dataNascimento", date)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>

                            </div>
                            <div>
                                {message}
                            </div>
                            <div style={styles.footer}>
                                {
                                    isEditing &&
                                    <>
                                        <TDButton title="Cancelar"
                                                  type="secundary"
                                                  styleProps={styles.button}
                                                  onClick={() => this.setState({isEditing: false})}
                                        />
                                        <TDButton title="Salvar"
                                                  type="primary"
                                                  styleProps={styles.button}
                                                  onClick={this.save}
                                        />
                                    </>
                                }
                                {
                                    !isEditing &&
                                    (
                                        <>
                                            <FileUpload
                                                title="Enviar foto"
                                                inputProps={{
                                                    onChange: (event) => this.uploadPhoto(event)
                                                }}
                                            />

                                            <TDButton title="Atualizar"
                                                      type="primary"
                                                      styleProps={styles.button}
                                                      onClick={() => this.setState({isEditing: true})}
                                            />
                                        </>
                                    )
                                }


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
