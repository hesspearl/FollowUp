import React, {useEffect} from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../colors";
import WavyHeader from "../components/screen Components/wavyHeader";
import CircleButton from "../components/customComp/CircleButton";
import * as actions from "../store/actions/filter"
import {useDispatch} from "react-redux"

const startScreen = (props) => {
const {navigation}= props
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(actions.deleteMonth())
    });

    return unsubscribe;
  }, [navigation]);


  return (
    <View style={styles.contain}>
      <View style={{ height: "40%", justifyContent: "center" }}>
        <CircleButton color={colors.textBack} 
            src={require("../assets/add.png")}
            onPress={()=>props.navigation.navigate("body01")}
        />
      </View>
      <WavyHeader customStyle={styles.svg}>
        <View style={{ height: "60%", justifyContent: "center" }}>
          <CircleButton color={colors.fab}
          src={require("../assets/business-and-finance.png")}
          onPress={()=>props.navigation.navigate("list")} />
        </View>
      </WavyHeader>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: colors.background,
  },

  box: {
    backgroundColor: colors.textBack,
    height: "80%",
  },
  svg: {
    position: "absolute",
    bottom: 0,

    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height/2
  },
});
export default startScreen;
