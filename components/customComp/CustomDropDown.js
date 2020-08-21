import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";


const DropDownComp = (props) => {
  const [visible, setVisible] = useState(false);

  const options = [
    {
      label: props.option[0],
      value: { value: props.option[0], color: "green" },
    },
    {
      label: props.option[1],
      value: { value: props.option[1], color: "yellow" },
    },
    { label: props.option[2], value: { value: props.option[2], color: "red" } },
  ];

  const onValueChange = (value) => {
    props.onValueChange(value);
    return setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        presentationStyle="overFullScreen"
        onRequestClose={() => setVisible(false)}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {options.map((i, index) => (
            <View
              style={{
                width: "60%",
                height: "10%",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View key={index}>
                <TouchableOpacity onPress={() => onValueChange(i.value)}>
                  <Text style={styles.text}>{i.label}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={{ ...styles.text, margin: 20 }}>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 25, fontFamily: "Piedra" },
});

export default DropDownComp;
