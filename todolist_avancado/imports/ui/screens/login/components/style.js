import defaultStyles from '../../../reuse/layout/defaultLayout';

export default   {
    ...defaultStyles,
    container: {
        width: '50%'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 30,
        textColor: 'white'
    },
    footer: {
        marginTop: 100
    },
    session: {
        margin: 10
    }

}
