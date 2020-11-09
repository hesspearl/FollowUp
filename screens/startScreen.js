import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 , Fontisto } from "@expo/vector-icons";
import * as actions from "../store/actions/filter";
import { useDispatch } from "react-redux";
import { position } from "../modals/itemsArray";
import moment from "moment";
import Cart from "../assets/cart.svg"

const startScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const [current, setCurrent] = useState();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(actions.deleteMonth());
    });

    currentMonth();

    return unsubscribe;
  }, [navigation]);

  const currentMonth = () => {
    const thisMonth = moment().month();

    const current = position[thisMonth];
    setCurrent({ position: current, index: thisMonth });
  };

  return (
    <View style={styles.contain}>
      <Cart
        style={{ width: 250, height: 200 }}
      />
      <TouchableOpacity
        onPress={()=>props.navigation.navigate("body01")}
      >
        <View style={styles.button}>
          <FontAwesome5 name="wallet" size={40} color="black" />
          <Text style={styles.title}>Buy</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("loadingMonth", {
            position: current.position,
            index: current.index,
          })
        }
      >
      <Fontisto name="arrow-swap" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  button: {
    width: 120,
    height: 100,
    elevation: 3,
    borderTopLeftRadius: 40,
    borderBottomEndRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "SpartanBold",
  },
});
export default startScreen;
// 

//  />
