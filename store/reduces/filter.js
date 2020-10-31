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
   
  multiFilter:{}
};

export default filter = (state = initialState, action) => {
  switch (action.type) {
    case MONTHS:

    // console.log(action.value)
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
        multiFilter:[]
      };

    case DELETED_ITEMS:
      let item = state.months.map((i) => i.id).indexOf(action.value);

      state.months.splice(item, 1);

      return { ...state };
  }

  return state;
};
