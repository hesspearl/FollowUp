import React, { useReducer, useState, } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useFirestore, isLoaded } from "react-redux-firebase";
import colors from "../colors";
import ShowMore from "../components/screen Components/showMore";
import ModalComp from "../components/customComp/Modal";
import DateCalender from "../components/customComp/dateCalender";
import Lights from "../components/customComp/lights"
import DropDownComp from "../components/customComp/CustomDropDown"
import SwitchSelctor from "../components/screen Components/SwitchSelector"
import {
  inputReducer,
  INPUTS_VALUES,
  DATE,
  DROP,
  CHOICE,
  init,
  CHOICES,
} from "../store/reduces/editReducer";
import moment from "moment";

const EditScreen = (props) => {
  const { dataId } = props.route.params;
  const optionsImportant=["low", " average", "high"]
  const optionsNecessary=["yes" , " no", "maybe"]

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [stateInputs, dispatchInputs] = useReducer(inputReducer, init(dataId));

  function toggleDone() {
    firestore.update(`Cards/${props.id}`, { done: card.one });
  }


  const inputTextHolder = (inputIdentifier, text) => {
    let isValid = false;
    if (text.trim().length > 0) {
      isValid = true;
    }
    dispatchInputs({
      type: INPUTS_VALUES,
      value: text,
      isValid: isValid,
      input: inputIdentifier,
    });
  };

  const pressHandler = (l) => {
    dispatchInputs({
      type: DROP,
      value: l.label,
      avatar: l.avatar,
    });

    setShow(false);
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TextInput
          style={{ ...styles.title, fontSize: 60 }}
          onChangeText={inputTextHolder.bind(this, "productName")}
          value={stateInputs.inputValues.productName}
        />

        <Image
          style={styles.image}
          source={{ uri: stateInputs.inputValues.application.avatar }}
        />
      </View>

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.titlesContain}>
          <TouchableOpacity onPress={() => setShow(true)}>
            <View>
              <Text style={styles.title}>
                {" "}
                {stateInputs.inputValues.application.value}
              </Text>
            </View>
          </TouchableOpacity>
          <ModalComp visible={show} onPress={pressHandler} />

          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={styles.title}> {stateInputs.inputValues.date}</Text>
          </TouchableOpacity>
          {open && (
            <DateCalender
              value={moment(
                stateInputs.inputValues.date,
                "DD/MM/YYYY"
              ).toDate()}
              open={setOpen}
              newDate={(value) =>
                dispatchInputs({
                  type: DATE,
                  value: value,
                })
              }
            />
          )}
          <TextInput
            style={styles.title}
            onChangeText={inputTextHolder.bind(this, "spend")}
            keyboardType="number-pad"
            value={stateInputs.inputValues.spend}
          />
        </View>

        <View style={styles.rowContain}>
        <Lights
          title="Important level"
          color={ stateInputs.inputValues.important.color}
        
       >
       <DropDownComp
       option={optionsImportant}
 value={stateInputs.inputValues.important.value}
  onValueChange={value=>
  dispatchInputs({
 type:CHOICES , value:value.value, color:value.color
  })}
        />  

       </Lights>
        
       
   
     
     
        <Lights
          title="Necessary?"
          color={ stateInputs.inputValues.necessary.color}
        
        >
            <DropDownComp
       option={optionsNecessary}
 value={stateInputs.inputValues.necessary.value}
  onValueChange={value=>
  dispatchInputs({
 type:CHOICE , value:value.value, color:value.color
  })}
        />  
        </Lights>
        </View>
 <TextInput
          style={{ ...styles.title, fontSize: 30 }}
          onChangeText={inputTextHolder.bind(this,"observation")}
          value={stateInputs.inputValues.observation}
          
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    //marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Piedra",
    fontSize: 40,
    margin: 15,
  },
  imageContainer: {
    width: "80%",
    // height: "50%",
    alignItems: "center",

    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:30
  },
  rowContain: {
    flexDirection: "column",
    width: "100%",
    // height: "20%",
    alignItems: "flex-end",
    //margin:10,
    borderBottomWidth: 1,
    paddingBottom: 20,
    //  justifyContent:"flex-start",
  },
  titlesContain: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },

});
export default EditScreen;
