function FormValidation(values) {
    const error = {}
    if (values.usuario === '' || values.email === '' || values.contraseña === '') {
        error.message = 'Formulario incompleto'
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))) {
        error.message = 'Email incorrecto'
    }
    return error
}

export default FormValidation;