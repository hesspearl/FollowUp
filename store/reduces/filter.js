
import {MONTHS, SELECTED_FILTER, DELETED_FILTER, DELETED_MONTHS} from "../actions/filter"

//save filtered cards
initialState={
months:[],
filter:[]
}

export default filter=(state=initialState , action)=>{

    switch(action.type){

        case MONTHS:

            return {
                ...state,
                months:[...action.value]
            }

            case SELECTED_FILTER:

            return{
                ...state,
                filter:[...action.value]
            }

            case DELETED_FILTER:

            return{
                ...state,
                filter:[]
            }

            case DELETED_MONTHS:
                return {
                    months:[],
                    filter:[]
                }
                 

    }

    return state
}