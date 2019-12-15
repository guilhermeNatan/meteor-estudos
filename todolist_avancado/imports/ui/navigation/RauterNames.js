export default  {
    BEGIN: '/',
    HOME: '/home',
    SIGNUP: '/signup',
    TASKS: '/tasks',
    PROFILE: '/profile',
    EDIT_TASK : {
        router: `/editTask/:operacao(criar|editar)/:idTask?`,
        editar: (id) => `/editTask/editar/${id}`,
        criar: () => `/editTask/criar`
    },

}
