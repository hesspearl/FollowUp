import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../colors";

const finishButton = (props) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.title}>FINISHED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight:"bold"
  },
  button: {
    width: "80%",
    height: "8%",
    elevation: 6,
    fontSize: 30,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:20
  },
});
export default finishButton;
