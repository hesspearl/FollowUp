import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import * as actions from "../store/actions/filter";
import { useDispatch, useSelector } from "react-redux";
import { position } from "../modals/itemsArray";
import moment from "moment";
import Cart from "../assets/cart.svg";
import BSH from "../components/customComp/bottomSheetHeader";
import BottomSheet from "reanimated-bottom-sheet";
import { useFirebase } from "react-redux-firebase";

const startScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.firebase.profile);
  const firebase = useFirebase();
  const [current, setCurrent] = useState();

  console.log(state);
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

  const logOut=()=>{
   firebase.logout()
  }

  return (
    <View style={styles.contain}>
      <Text style={{ fontSize: 25, fontFamily: "Spartan" }}>
        Welcome Back
        <Text style={{ fontSize: 25, fontFamily: "SpartanBold" }}>
          {state.displayName? state.displayName:
          state.username} !
        </Text>
      </Text>
      <Cart width="300" height="250" />
      <TouchableOpacity onPress={() => props.navigation.navigate("body01")}>
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

      <BottomSheet
        snapPoints={[130, 250]}
        renderContent={() => {
          return (
            <View style={styles.buttonsContain}>
              <Button name="cog" title="Settings" />
              <Button
                name="door-open"
                title="Leave"
                onPress={()=>logOut()}
              />
            </View>
          );
        }}
        renderHeader={() => <BSH />}
        initialSnap={0}
      />
    </View>
  );
};

const Button = (props) => (
  <TouchableOpacity onPress={props.onPress} style={{ alignItems: "center" }}>
    <FontAwesome5 name={props.name} size={35} color="black" />
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
);

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
  buttonsContain: {
    height: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
});
export default startScreen;
//

//  />
