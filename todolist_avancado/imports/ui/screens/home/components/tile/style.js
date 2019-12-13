import defaultStyles from '/imports/ui/reuse/layout/defaultLayout';

export default   {
    ...defaultStyles,
    container: {
        backgroundColor: defaultStyles.colors.primaryColorLight,
        width: '300px',
        height: '300px',
        padding: '10px'
    },

    titleTile: {
        ...defaultStyles.bigTitle,

    },
    metric: {
        ...defaultStyles.bigTitle,
        fontSize: defaultStyles.fonts.giant
    }
}