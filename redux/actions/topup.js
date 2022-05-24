import qs from 'qs'
import http from '../../helpers/http'

export const addBalance = (amount, token) => {
    const data = {amount}
    return {
        type: 'ADD_TOPUP',
        payload: http(token).post('/transactions/topup', qs.stringify(data))
    }
}