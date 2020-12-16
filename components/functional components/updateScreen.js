import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import * as actions from "../../store/actions/filter";

const Update = (props) => {
  const { id } = props.route.params;
  const { uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/${uid}/Cards`,
    storeAs: "Cards",
  });

  const dispatch = useDispatch();
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);
  const state = useSelector((state) => state.filter.months);

 
  useEffect(() => {
    //  get card with same id
    let newData = cards.filter((i) => i.id === id);
    const replace = state.findIndex((i) => i.id === newData[0].id);
    state[replace] = newData[0];

    //
    dispatch(actions.deleteFilter());

    props.navigation.navigate("list");
  }, [cards]);

  return (
    <View />
  );
};

export default Update;
