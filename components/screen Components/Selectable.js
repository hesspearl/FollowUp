import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";
import * as actions from "../../store/actions/filter"
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import moment from "moment";
import ListLayout from "../screen Components/listLyout";


const Selectable = (props) => {
  const { array, filter, navigation } = props;
  // selected change color to black
  const [selectedMonth, setSelectedMonth] = useState();
  // selected change color to black
  const [selectedFilter, setSelectedFilter] = useState();

  const dispatch = useDispatch()
  const state = useSelector(state => state.filter)
 useFirestoreConnect(["Cards"]);
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);
 

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
     setSelectedFilter()
    });

    return unsubscribe;
  }, [navigation]);


 


  // function that return the month selected
  const MonthsHandler = (index) => {
    let items = [];
    setSelectedMonth(index);

    for (const card of cards) {
      let date = moment(card.format.date, "DD/MM/YYYY", true).format();

      if (moment(date).month() === index) {
        if (moment(date).format("DD/MM/YYYY") === card.format.date) {
          items.push(card);
        }
      }
    }
   
    dispatch(actions.filterByMonths(items))
  };

  const filterHandler = (index) => {
    let f = [];
    setSelectedFilter(index)

    

    if (!state.months.length) {
      return alert("please choose month, or this month have no items  ");
    }

    switch (filter.type) {
      case "importance":
        state.months
          .filter((i) => i.format.important.value == filter.array[index])
          .map((i) => f.push(i));

          
          if(!f.length)
          {dispatch(actions.deleteFilter())}else{
            dispatch(actions.selectFilter(f))
          }
       
    }
  };



  if (filter) {
   
    return (
      <ListLayout
        array={filter.array}
        selected={selectedFilter}
        Handler={filterHandler}
        clean={setSelectedFilter}
      />
    );
  } else {
    return (
      <ListLayout
        array={array}
        selected={selectedMonth}
        Handler={MonthsHandler}
      />
    );
  }
};

export default Selectable;

