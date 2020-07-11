import { POST_FROM_PAGE_01, POST_FROM_PAGE_02 } from "../actions/format"

initialState={
format:{}
}


export default format=(state=initialState, action)=>{
    switch(action.type){

        case POST_FROM_PAGE_01:
            const page01=action.value

            return{
                format:{...state,page01}
            }

            case POST_FROM_PAGE_02:
                const page02=action.value

                return{
                    format:{...state,page02}
                }
        
    }
}