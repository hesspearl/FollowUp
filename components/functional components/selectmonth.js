import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import moment from "moment";
import { useDispatch } from "react-redux";


 

export const MonthsHandler = (index , cards , dispatch) => {
    
 
    
    let items = [];
   // setSelectedMonth(index);

    for (const card of cards) {
      let date = moment(card.format.date, "DD/MM/YYYY", true).format();

      if (moment(date).month() === index) {
        if (moment(date).format("DD/MM/YYYY") === card.format.date) {
          items.push(card);
        }
      }
    }

  return  dispatch(actions.filterByMonths(items));
  };