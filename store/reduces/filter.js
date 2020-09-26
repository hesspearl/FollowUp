
import {MONTHS, SELECTED_FILTER, DELETED_FILTER} from "../actions/filter"

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

    }

    return state
}