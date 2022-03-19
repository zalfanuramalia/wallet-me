const dataRegister = {
    data : null,
    message : null,
    isError : false,
    isLoading : false,
    errMessage : null
}

const register = (state=dataRegister,action)=>{
    switch(action.type){
        case 'DATA_REGISTER' : {
            state.data = action.payload
            return {...state}
        }
        case 'REGISTER_PENDING' : {
            state.isLoading = true
            return {...state}
        }
        case 'REGISTER_FULFILLED' : {
            const{data} = action.payload
            state.isLoading = false
            state.message = data.message
            state.isError = false
            return {state}
        }
        case 'REGISTER_REJECTED':{
            const {data} = action.payload.response
            state.isLoading = false
            state.isError = true
            state.errMessage = data.message
        }
        default : {
            return {...state}
        }
    }
}

export default register