import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import TextField from "../components/TextField";
import SwitchSelector from "../components/SwitchSelector";
import colors from "../colors";
import SwipeButton from "rn-swipe-button";
import { AntDesign } from "@expo/vector-icons";
import DropDown from "../components/DropDown";
import {useDispatch} from "react-redux"
import * as actions from "../store/actions/format"


const INPUTS_VALUES = "INPUTS_VALUES";
const CHOICE = "CHOICE";
const DROP = "DROP";




const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUTS_VALUES:
      const updateValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };
      return {
        inputValues: updateValues,
      };

    case DROP:
      const updateDrop = {
        ...state.inputValues,
        application: action.value,
      };
      return {
        inputValues: updateDrop,
      };
    case CHOICE:
      const updateChoice = {
        ...state.inputValues,
        important: {
          value: action.value,
          color: action.color,
        },
      };
      return {
        inputValues: updateChoice,
      };
  }
  return state;
};

const important = ["low", " average", "high"];

const Body01 = (props) => {

  const [stateInput, dispatchInput] = useReducer(inputReducer, {
    inputValues: {
      productName: "",
      application: "",
      spend: "",
      important: {
        value: "",
        color: "",
      },
    },
  });

  const dispatch = useDispatch()
  
  const swiping=() =>{

    dispatch(actions.inputsPage1(
      stateInput.inputValues.productName,
      stateInput.inputValues.application,
      stateInput.inputValues.spend,
      stateInput.inputValues.important,


    ))
     props.navigation.navigate("body02")
  }

  const inputTextHolder = (inputIdentifier, text) => {
    dispatchInput({
      type: INPUTS_VALUES,
      value: text,

      input: inputIdentifier,
    });
  };

  const triangle = () => {
    return <AntDesign name="caretright" size={50} color={colors.buttons} />;
  };


  return (
    <View style={styles.container}>
      <TextField
        onChangeText={inputTextHolder.bind(this, "productName")}
        // value={stateInput.inputValues.productName}
      >
        Product Name
      </TextField>
      <DropDown
        onChangeItem={(item) =>
          dispatchInput({
            type: DROP,
            value: item,
          })
        }
      />
      <TextField
      style={{marginTop:100}}
        onChangeText={inputTextHolder.bind(this, "spend")}
        keyboardType="number-pad"
        //  value={stateInput.inputValues.spend}
      >
        Amounts spend
      </TextField>
      <SwitchSelector
        option={important}
        onPress={(value) =>
          dispatchInput({
            type: CHOICE,
            value: value.value,
            color: value.color,
          })
        }
      >
        is it important?
      </SwitchSelector>
      <SwipeButton
        railFillBackgroundColor="white" //(Optional)npm install redux
        thumbIconComponent={triangle}
        thumbIconBackgroundColor="#FFFFFF"
        railBackgroundColor={colors.buttons} //(Optional)
        width={"90%"}
        titleFontSize={30}
        title="Slide to Next"
        onSwipeSuccess={ swiping }
        shouldResetAfterSuccess={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
});
export default Body01;
