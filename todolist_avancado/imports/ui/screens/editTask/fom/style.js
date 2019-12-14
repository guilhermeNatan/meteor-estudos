import defaultStyles from '../../../reuse/layout/defaultLayout';

export default   {
    ...defaultStyles,
    container: {
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textField: {
      width: '80%',
    },
    button: {
        margin: '0px 15px 0px 15px'
    },
    footer: {
        marginTop: 100
    },
    dateTime: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%',
    }
}
