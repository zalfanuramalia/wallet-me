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

export const resetPassProcess = (datas) => {
    const params = new URLSearchParams()
    params.append('otp', datas.otp)
    params.append('newPassword', datas.newPassword)
    params.append('confirmPassword', datas.confirmPassword)
    return({
    type: 'RESET_PASSWORD',
    payload: http().post('/auth/forgot-password', params)
  })
}