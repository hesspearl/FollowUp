import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const circleButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.container, backgroundColor: props.color }}>
        <Image style={styles.img} source={props.src} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
export default circleButton;
