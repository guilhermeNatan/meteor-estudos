import defaultStyles from '../../reuse/layout/defaultLayout';

export default   {
    ...defaultStyles,
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20%'
    },

    title: {
       ...defaultStyles.bigTitle,
        margin: 30,
        borderWidth: 3,
        borderColor: 'black'
    }
}