import { POST_FROM_PAGE_01, POST_FROM_PAGE_02, EDIT } from "../actions/format"

initialState={
format:{},
edit:{}
}


export default format=(state=initialState, action)=>{
    switch(action.type){

        case POST_FROM_PAGE_01:
            const page01=action.value
       
            return{
                ...state,
              format:{ ...page01}
            }

            case POST_FROM_PAGE_02:
                const page02=action.value
console.log(page02)
                return{
                    ...state,
                   format:{ ...state.format,
                    ...page02}
                }
        
                case EDIT:
                    
                    const edit=action.value
                 
                    return{
                        ...state,
                        edit:{...edit}
                    }
    }

    return state
}