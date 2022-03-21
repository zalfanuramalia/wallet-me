const dataLogin = {
    token: null,
    balance: 0,
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
        case 'GET_PROFILE_PENDING': {
            state.isLoading = true
            return {...state }
        }
        case 'GET_PROFILE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.userData = data.results
            return {...state }
        }
        case 'GET_BALANCE_PENDING': {
            state.isLoading = true
            return {...state }
        }
        case 'GET_BALANCE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.balance = data.results
            return {...state }
        }
        case 'GET_BALANCE_REJECTED': {
            const {message} = action.payload.response.data
            state.isLoading = false
            state.isError = true
            state.errorMsg = message
            return {...state}
          }
        case 'AUTH_LOGOUT': {
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