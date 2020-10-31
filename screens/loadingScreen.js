import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/filter";
import moment from "moment";
import { position } from "../modals/itemsArray";

 const LoadingScreen = (props) => {
  const data = useSelector((state) => state.format);

    const firestore = useFirestore();

  firestore.add("Cards", {
    ...data,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
  const currentMonth = () => {
    const thisMonth = moment().month();

    const current = position[thisMonth];
    props.navigation.navigate("loadingMonth",{ position: current, index: thisMonth }); 
  };
  useEffect(() => {
    currentMonth();
  }, [data, firestore]);

 return <View/>
 
};



export default LoadingScreen;
