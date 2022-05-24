const dataTransfer = {
    dataReceiver : null,
    dataTransfer:null,
    message : null,
    isError : false,
    isLoading : false,
    errMessage : null
}

const transfer = (state=dataTransfer,action)=>{
    switch(action.type){
        case 'DATA_USER_RECEIVER' : {
            state.dataReceiver = action.payload
            return {...state}
        }
        case 'DATA_TRANSFER' : {
            state.dataTransfer = action.payload
            return {...state}
        }
        default : {
            return {...state}
        }
    }
}

export default transfer