import React, { useRef } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Tooltip from "../customComp/tooltip";

const ListIcons = (props) => {
  const { title } = props;

  const ref = useRef();
  const longPressHandler = () => {
    ref.current.toggleTooltip();
  };

  
  return (
    <View style={{ alignItems: "center" }}>
      <Tooltip forwardRef={ref} tip={title}>
        <TouchableOpacity onLongPress={longPressHandler}>
          {props.children}
        </TouchableOpacity>
      </Tooltip>

      <View style={{ ...styles.selected, backgroundColor: props.color }} />
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    width: 60,
    height: 10,

    marginTop: 5,
  },
});
export default ListIcons;
