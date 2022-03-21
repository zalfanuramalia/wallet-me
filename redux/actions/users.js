import http from '../../helpers/http'

export const getUsers = (token) => {
    return {
        type: 'GET_USERS',
        payload: http(token).get('/users')
    }
}