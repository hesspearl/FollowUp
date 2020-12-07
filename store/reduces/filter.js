import {
  MONTHS,
  SELECTED_FILTER,
  SELECTED_MONTH,
  DELETED_FILTER,
  DELETED_MONTHS,
  DELETED_ITEMS,
} from "../actions/filter";
import moment from "moment";

//save filtered cards
const initialState = {
  months: [],
  selectedMonth:"",
  filter: [],
  currentMonth: { position: "", index: "" },
  loaded: true,
};

export default filter = (state = initialState, action) => {
  switch (action.type) {
    case MONTHS:
      const values = action.value.reverse();
      const year = (index) => {
        return moment(values[index].format.date, "DD/MM/YYYY").year();
      };
      let y;

      var i = 0;
      while (i < values.length) {
        if (year(0) !== year(i) && year(i) != y) {
          y = year(i);

          values.splice(i, 0, { year: y });

          i++;
          // console.log(i)
        }

        i++;
      }

      //  console.log(  values )
      //   if(newValues)
      // {values.splice(newValues.index +1, 0, {year:newValues.year});
      //  newValues={}  }

      return {
        ...state,
        months: [...values],
        currentMonth: {
          position: action.position,
          index: action.index,
        },
        loaded: false,
      };

    case SELECTED_FILTER:
      return {
        ...state,
        filter: {
          name: action.name,
          data: [...action.value],
        },
      };

    case DELETED_FILTER:
      return {
        ...state,
        filter: {
          name: state.filter.name,
          data: [],
        },
      };

      case SELECTED_MONTH:

      console.log(action.value)
      return{
        ...state,
        selectedMonth:action.value
      }
    case DELETED_MONTHS:
      return {
selectedMonth:"",
        currentMonth: state.currentMonth,
        months: [],
        filter: {},
        loaded: true,
      };

    case DELETED_ITEMS:
      let item = state.months.map((i) => i.id).indexOf(action.value);
      if (state.filter.data) {
        let FItem = state.filter.data.map((i) => i.id).indexOf(action.value);

        state.filter.data.splice(FItem, 1);
      }

      state.months.splice(item, 1);

      return { ...state };
  }

  return state;
};
