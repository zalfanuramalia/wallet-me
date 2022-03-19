import http from '../../helpers/http'
import qs from 'qs'

export const loginProcess = (email, password) => {
    const data = { 'email': email, 'password': password };
    return {
        type: 'AUTH_LOGIN',
        payload: http().post('/auth/login', qs.stringify(data))
    }
}

export const getDataUsers = (token) => {
    return {
        type: 'LOGIN_USER',
        payload: http(token).get('/users')
    }
}