import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import TextField from "../components/TextField";
import SwitchSelector from "../components/SwitchSelector";
import colors from "../colors";
import SwipeButton from "rn-swipe-button";
import { AntDesign } from "@expo/vector-icons";
import DropDown from "../components/DropDown"


const important=["low", " average" , "high"]

const Body01 = (props) => {
 

 

  const triangle = () => {
   return <AntDesign name="caretright" size={50} color={colors.buttons} />;
  };
  return (
    <View style={styles.container}>
      <TextField>
          Product Name
      </TextField>
   <DropDown/>
      <TextField >
          Amounts spend
      </TextField>
      <SwitchSelector
      option={important}
      >
          is it important?
      </SwitchSelector>
      <SwipeButton
        railFillBackgroundColor="white" //(Optional)npm install redux
        thumbIconComponent={triangle}
        thumbIconBackgroundColor="#FFFFFF"
        railBackgroundColor={colors.buttons} //(Optional)
        width={"90%"}
        title="Slide to Next"
        onSwipeSuccess={()=>props.navigation.navigate('body02')}
       shouldResetAfterSuccess={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop:50,
   justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
 
  },
});
export default Body01;
