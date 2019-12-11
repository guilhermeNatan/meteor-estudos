import defaultStyles from '../../reuse/layout/defaultLayout';

export default   {
    ...defaultStyles,
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '7%'
    },

    title: {
       ...defaultStyles.titleSection,
        margin: 30,
        borderWidth: 3,
        borderColor: 'black'
    }
}
