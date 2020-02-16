const initSatae ={
    authError:null,
}

const authReducer = (state = initSatae,action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('success')
            return {
                ...state,
                authError:null
            }
        case 'LOGIN_ERROR':
            console.log('Error login');
            return {
                ...state,
                authError:'Login Failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signed Out successfully');
            return state
        case 'SIGNUP_SUCCESS':
            console.log('SignUp Success')
            return {
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('Error Signing up')
            return {
                ...state,
                authError:action.err.message,
            }
        default:
            // console.log('this is default');
            return state
    }
}

export default authReducer