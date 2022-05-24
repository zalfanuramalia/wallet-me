import qs from 'qs'
import http from '../../helpers/http'

export const getUserRecepient = (user,phone) => {
    var data = null
    if(phone!==null){
        data = {user,phone:phone.number}
    }else{
        data = {user,phone:'-'}
    }
    return {
        type: 'DATA_USER_RECEIVER',
        payload : data
    }
}

export const dataTransfer = (amount,recipient,notes) => {
    const data = {amount,recipient,notes}
     return {
         type: 'DATA_TRANSFER',
         payload : data
     }
}

export const postProcessTransfer = (data, token) => {
    return {
       type: 'TRANSACTION',
       payload: http(token).post('/transactions/transfer', qs.stringify(data))
    };
};