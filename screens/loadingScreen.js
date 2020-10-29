import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/filter";
import moment from "moment";

export const LoadingScreen = (props) => {
  const data = useSelector((state) => state.format);

    const firestore = useFirestore();

  firestore.add("Cards", {
    ...data,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });

  useEffect(() => {
    props.navigation.navigate("start");
  }, [data, firestore]);

 return <ActivityIndicator  color="red" style={{flex:1, justifyContent:"center", alignItems:"center"}} size="large" />
 
};


export const LoadingMonth = (props) => {
  const { position, index } = props.route.params;


 useFirestoreConnect(["Cards"]);
  const cards =  useSelector(({ fireStore: { ordered } }) => ordered.Cards);

  
  const dispatch = useDispatch()

  let items = [];

  useEffect(() => {
if(cards){

  for (const card of cards) {
    let date = moment(card.format.date, "DD/MM/YYYY", true).format();

    if (moment(date).month() === index) {
      if (moment(date).format("DD/MM/YYYY") === card.format.date) {
        items.push(card);
      }
    }
  }

  dispatch(actions.filterByMonths(items));
}

  props.navigation.navigate("list", {position:position, index:index});
  }, [items, cards]);           

 return <ActivityIndicator  color="red" style={{flex:1, justifyContent:"center", alignItems:"center"}} size="large" />
};
//export default LoadingScreen;
