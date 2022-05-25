const dataLogin = {
    token: null,
    userData: {},
    isLoading: false,
    isError: false,
    errorMsg: ''
}

const auth = (state = dataLogin, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_PENDING': {
            state.isLoading = true
            state.isError = false
            return {...state}
        }
        case 'AUTH_LOGIN_FULFILLED': {
            const {data} = action.payload
            console.log(data)
            state.isLoading = false
            state.isError = false
            state.token = data.results.token
            window.localStorage.setItem('token', state.token)
            return {...state}
        }
        case 'AUTH_LOGIN_REJECTED': {
          const {message} = action.payload.response.data
          state.isLoading = false
          state.isError = true
          state.errorMsg = message
          return {...state}
        }
        case 'GET_USER_PENDING': {
            state.isLoading = true
            return {...state }
        }
        case 'GET_USER_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.user = data.results
            return {...state }
        }
        case 'LOGOUT': {
            state.token = null
            window.localStorage.removeItem('token')
            state.isAuthenticated = false
            state.isVerify = false
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default auth