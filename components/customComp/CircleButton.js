import React from "react";
import { View, Image, StyleSheet } from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler"
const circleButton = (props) => {


  return (
    <TouchableOpacity onPress={props.onPress}
    enabledContentTapInteraction={false}>
      <View style={{ ...styles.container, backgroundColor: props.color, ...props.style }}>
        <Image style={{...styles.img,...props.img}} source={props.src} />
      </View>
    </TouchableOpacity>
  
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth:3,
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
