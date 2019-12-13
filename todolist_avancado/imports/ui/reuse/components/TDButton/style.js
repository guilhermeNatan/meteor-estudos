import defaultStyles from '/imports/ui/reuse/layout/defaultLayout';

export default   {
    ...defaultStyles,
    container: {
        width: 155,
        height: 40,
        boxShadow: 'none',
    },
    primary: {
        backgroundColor: defaultStyles.colors.primaryColor,
        color: 'white',
    },
    secundary: {
        backgroundColor: defaultStyles.colors.disabled,
        color: 'black'
    },
    disabled: {
        backgroundColor: defaultStyles.colors.primaryColorLight,
        color: 'white',
    }
}
