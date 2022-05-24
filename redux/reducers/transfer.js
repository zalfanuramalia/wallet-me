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
        case 'TRANSACTION_PENDING' : {
            state.isLoading = true;
            return {...state};
        }
        case 'TRANSACTION_FULFILLED' : {
            const{data} = action.payload;
            state.isLoading = false;
            state.message = data.message;
            state.isError = false;
            return {...state};
        }
        case 'TRANSACTION_REJECTED':{
            const {data} = action.payload.response;
            state.isLoading = false;
            state.isError = true;
            state.errMessage = data.message;
        }
        default : {
            return {...state}
        }
    }
}

export default transfer