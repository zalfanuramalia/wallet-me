import qs from 'qs'
import http from '../../helpers/http'

export const registerProcess = (data,pin) => {
    data.pin = pin
    return {
        type: 'REGISTER',
        payload: http().post('/auth/register', qs.stringify(data))
    }
}

export const getDataRegister = (dataRegister) => {
    console.log(dataRegister)
    const fullName = `${dataRegister.firstname} ${dataRegister.lastname}`
    const data = { 'fullName': fullName, 'email':dataRegister.email, 'password': dataRegister.password };
    return {
        type: 'DATA_REGISTER',
        payload : data
    }
}