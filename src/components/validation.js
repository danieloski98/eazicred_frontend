export const validateField = function (field, setField, fieldName, value){
    function validateForm() {
        this.setState({formValid: field.emailValid && field.passwordValid});
    }

    let fieldValidationErrors = field.formErrors;
    let emailValid = field.emailValid;
    let passwordValid = field.passwordValid;

    switch(fieldName) {
        case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' email is invalid';
            break;
        case 'password':
            passwordValid = value.length >= 8;
            fieldValidationErrors.password = passwordValid ? '': ' password is too short';
            break;
        default:
            break;
    }
    setField({formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
    }, validateForm);
}