import http from '../../helpers/http'
import qs from 'qs'

export const loginProcess = (email, password) => {
    const data = { 'email': email, 'password': password };
    return {
        type: 'AUTH_LOGIN',
        payload: http().post('/auth/login', qs.stringify(data))
    }
}

export const getDataProfile = (token) => {
    return {
        type: 'GET_PROFILE',
        payload: http(token).get('/profile')
    }
}

export const getBalance = (token) => {
    return {
        type: 'GET_BALANCE',
        payload: http(token).get('/profile/balance')
    }
}

