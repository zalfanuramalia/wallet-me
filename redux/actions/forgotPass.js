import qs from 'qs'
import http from '../../helpers/http'

const {NEXT_PUBLIC_CALL_URL} = process.env

export const forgotPassProcess = (email) => {
    const data = {email:email}
    return {
        type: 'FORGOT_PASSWORD',
        payload: http().post(`/auth/forgot-password?callback_url=${NEXT_PUBLIC_CALL_URL}`, qs.stringify(data))
    }
}

export const resetPassProcess = (password, confirmPass) => {
    const data = {password, confirmPass}
    return {
        type: 'RESET_PASSWORD',
        payload: http().post('/auth/forgot-password', qs.stringify(data))
    }
}