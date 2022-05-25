const dataLogin = {
    token: null,
    userData: {},
    isLoading: false,
    isError: false,
    errorMsg: ''
}

const users = (state = dataLogin, action) => {
    switch (action.type) {        
        case 'GET_USERS_PENDING': {
            state.isLoading = true
            return {...state }
        }
        case 'GET_USERS_FULFILLED': {
            const { data } = action.payload
            console.log(data)
            state.isLoading = false
            state.userData = data.results
            return {...state }
        }
        case 'GET_USERS_REJECTED': {
            const { data } = action.payload.response
            console.log(data)
            state.isLoading = false
            state.isError = true
            state.errorMsg = data.error
            return { ...state }
        }
        default: {
            return {...state }
        }
    }
}

export default users