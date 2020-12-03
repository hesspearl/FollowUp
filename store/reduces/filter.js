import {
  MONTHS,
  SELECTED_FILTER,
  SELECTED_MULTI_FILTER,
  DELETED_FILTER,
  DELETED_MONTHS,
  DELETED_ITEMS,
} from "../actions/filter";

//save filtered cards
const initialState = {
  months: [],
  filter:[],
  currentMonth:{position:"",
index:""},
loaded:true
   

};

export default filter = (state = initialState, action) => {
  switch (action.type) {
    case MONTHS:

    const values= action.value.reverse()
       
      return {
        ...state,
        months: [...values],
        currentMonth:{
          position:action.position,
          index:action.index
        },
        loaded:false
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
currentMonth:state.currentMonth,
        months: [],
        filter:{},
 loaded:true
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
