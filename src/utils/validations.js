
export const checkValidateData = (email, password) => {
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!emailValidate) return 'Email id is not valid !!'
    if(!passwordValidate) return 'Password is not valid !!'
    if(emailValidate === '' || passwordValidate === '') return 'Please fill all fields to proceed'
    if(emailValidate && passwordValidate) return null;
}
