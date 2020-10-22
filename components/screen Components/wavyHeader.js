import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import colors from "../../colors";

const wavyHeader = (props) => {
  return (
    <View style={props.customStyle}>
      <View style={styles.wave}>
        <Svg
          style={styles.svg}
          height="41%"
          width="100%"
          viewBox="10 0 1440 1"
        >
          <Path
            fill="#C4C4C4"
           // fillOpacity="10"
            d="M0,64L48,64C96,64,192,64,288,101.3C384,139,480,213,576,256C672,299,768,309,864,309.3C960,309,1056,299,1152,272C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></Path>
        </Svg>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wave: {
    flex:1,
    backgroundColor: colors.textBack,
  },
  svg: {
    position: "absolute",
    bottom:  Dimensions.get("screen").height/2
  },
});
export default wavyHeader;
