const dataTopup = {
    data : null,
    message : null,
    isError : false,
    isLoading : false,
    errMessage : null
}

const topup = (state=dataTopup,action)=>{
    
    switch(action.type){
        case 'ADD_TOPUP_PENDING' : {
            state.isLoading = true
            return {...state}
        }
        case 'ADD_TOPUP_FULFILLED' : {
            const{data} = action.payload
            state.isLoading = false
            state.message = data.message
            state.isError = false
            return {...state}
        }
        case 'ADD_TOPUP_REJECTED':{
            const {data} = action.payload.response
            state.isLoading = false
            state.isError = true
            state.errMessage = data.message
            return { ...state }
        }
        default : {
            return {...state}
        }
    }
}

export default topup