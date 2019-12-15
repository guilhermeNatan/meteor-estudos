import defaultStyles from '/imports/ui/reuse/layout/defaultLayout';

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
        margin: '0px 15px 0px 15px'
    },
    footer: {
        marginTop: 100
    },

}
