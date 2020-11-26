import {
  MONTHS,
  SELECTED_FILTER,
  SELECTED_MULTI_FILTER,
  DELETED_FILTER,
  DELETED_MONTHS,
  DELETED_ITEMS,
} from "../actions/filter";

//save filtered cards
initialState = {
  months: [],
  filter:[],
   

};

export default filter = (state = initialState, action) => {
  switch (action.type) {
    case MONTHS:

   
      return {
        ...state,
        months: [...action.value],
      };

    case SELECTED_FILTER:

 
      return {
        ...state,
        filter:{
          name:action.name,
          data:[...action.value]}
      };


    case DELETED_FILTER:
      return {
        ...state,
        filter:{
          name:state.filter.name,
          data:[]
        },
      };

    case DELETED_MONTHS:
      return {
        months: [],
        filter:{},
 
      };

    case DELETED_ITEMS:
      let item = state.months.map((i) => i.id).indexOf(action.value);
      if(state.filter.data){

        
      let FItem= state.filter.data.map((i) => i.id).indexOf(action.value);

        state.filter.data.splice(FItem,1)
      }

      state.months.splice(item, 1);

      return { ...state };
  }

  return state;
};
