import React from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const DropDown = (props) => {
  return (
    <View style={{ width: "80%", height: "5%" }}>
      <Text style={{ 
        fontSize: 30,
       margin: 10,
       marginTop:20, 
       marginBottom: 15,
        fontFamily: 'Piedra'}}>
        Application
      </Text>
      <DropDownPicker
        items={[
          { label: "beauty", value: "beauty" },
          { label: "clothes", value: "clothes" },
          { label: "work", value: "work"},
          { label: "alimentations", value: "alimentations"},
          { label: "with friends", value: "with friends" },
          { label: "games", value:"games" },
          { label: "essentials", value:  "essentials" },
          { label: "needless", value:  "needless"},
          { label: "others(observation)", value: "others(observation)"},
        ]}
        containerStyle={{ height: "100%", width: "100%" }}
        style={{ backgroundColor: "#fafafa" }}
        labelStyle={{
          fontSize: 25,
          textAlign: "left",
          color: "#000",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa", height: 120 }}
        zIndex={5000}
        onChangeItem={item =>props.onChangeItem(item.value)}
        
      />
    </View>
  );
};


export default DropDown;
