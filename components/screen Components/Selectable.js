import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as actions from "../../store/actions/filter";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import moment from "moment";
import ListLayout from "../screen Components/listLyout";

//import {MonthsHandler} from "../functional components/selectmonth"

const Selectable = (props) => {
  const { array, filter, navigation, indexOfMonth, store } = props;
  // selected change color to black
  const [selectedMonth, setSelectedMonth] = useState(indexOfMonth);
  // selected change color to black
  const [selectedFilter, setSelectedFilter] = useState();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.filter);

 
console.log(selectedFilter)

  useFirestoreConnect(["Cards"]);
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setSelectedFilter();
    });
store({
  ["storing"]:[selectedFilter, setSelectedFilter]
})
    return unsubscribe;
  }, [navigation, selectedFilter]);


  

  //function that return the month selected
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

    dispatch(actions.filterByMonths(items));
  };

  // function that handle the filters returns
  const filterHandler = (index) => {
    //setSelectedFilter(index);

    if (!state.months.length) {
      return alert("please choose month, or this month have no items  ");
    }

    switch (filter.type) {
      case "importance":
        
        filtering("important", index);
        break;
      case "necessary":
        filtering("necessary", index);
        break;

      case "price":
        filterPrice(index);
        break;
    }
  };

  const filtering = (item, index) => {
   
    setSelectedFilter(index)
    let f = [];

    state.months
      .filter((i) => i.format[item].value == filter.array[index])
      .map((i) => f.push(i));
    if (!f.length) {
      dispatch(actions.deleteFilter());
    } else {
      dispatch(actions.selectFilter(f, item));
    }
  };

  const filterPrice = (index) => {
    setSelectedFilter(index)
    let f = [];
    // if filter array =1 (highest to lowest)
    if (index === 0) {
      state.months
        .sort((a, b) => b.format.spend - a.format.spend)
        .map((i) => f.push(i));
      dispatch(actions.selectFilter(f, "price"));
    }

    if (index === 1) {
      state.months
        .sort((a, b) => a.format.spend - b.format.spend)
        .map((i) => f.push(i));
      dispatch(actions.selectFilter(f, "price"));
    }
    if (!f.length) {
      dispatch(actions.deleteFilter());
    }
  };

  

  if (filter) {
    return (
      <ListLayout
        array={filter.array}
        selected={selectedFilter}
        Handler={filterHandler}
        width={filter.type === "price" && 180}
        fontSize={filter.type === "price" && 15}
     
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
