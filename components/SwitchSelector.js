import React from "react";
import colors from "../colors";
import SwitchSelector from "react-native-switch-selector";
import { Text, View } from "react-native";

const switchSelector = (props) => {
  const options = [
    { label: props.option[0], value: { value:  props.option[0], color: "green" } },
    { label: props.option[1], value: { value:  props.option[1], color: "yellow" } },
    { label: props.option[2], value: { value:  props.option[2], color: "red" } },
  ];

  return (
    <View>
      <Text style={{ fontSize: 30, margin: 10 ,marginTop:20, fontFamily:'Piedra'}}>{props.children}</Text>
      <SwitchSelector
        textColor={"black"}
        fontSize={25}
        selectedColor={"white"}
        buttonColor={colors.buttons}
        borderColor={"purple"}
        options={options}
        borderRadius={6}
        style={{ width: "80%", height: "10%" }}
        initial={0}
        onPress={props.onPress}
      />
    </View>
  );
};

export default switchSelector;
