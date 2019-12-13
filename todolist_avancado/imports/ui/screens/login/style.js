import defaultStyles from '../../reuse/layout/defaultLayout';

export default   {
    ...defaultStyles,
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: '7%'
    },

    title: {
       ...defaultStyles.titleSection,
        margin: 30,
        borderWidth: 3,
        borderColor: 'black'
    }
}
