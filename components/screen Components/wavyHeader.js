import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import colors from "../../colors";

const wavyHeader = (props) => {
  return (
    <View style={props.customStyle}>
     
        <Svg
          style={styles.svg}
          width="400" height="900" viewBox="0 0 269 568"
        >
          <Path
            fill="white"
            fillOpacity="1"
            d="M0 16.9837C92 -61.628 269 162.689 269 82.7563C269 2.8236 269 568 269 568H0V319.895V16.9837Z"
           
          ></Path>
        </Svg>
      
       {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  wave: {
    flex:1,
    backgroundColor: "black",
  },
  svg: {
    position: "absolute",
    bottom:-200
  },
});
export default wavyHeader;
