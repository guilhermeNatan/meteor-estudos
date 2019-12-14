import defaultStyles from '/imports/ui/reuse/layout/defaultLayout';

export default   {
    ...defaultStyles,
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    fab: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    },
}
