import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useSelector } from "react-redux";
import { useFirestore, isLoaded } from "react-redux-firebase";
import colors from "../colors";
import ShowMore from "../components/screen Components/showMore";
import ModalComp from "../components/customComp/Modal";
import DateCalender from "../components/customComp/dateCalender";
import Lights from "../components/customComp/lights";
import DropDownComp from "../components/customComp/CustomDropDown";
import SwitchSelctor from "../components/screen Components/SwitchSelector";
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
import CircleButton from "../components/customComp/CircleButton";
import Observation from "../components/screen Components/showMore";
import { FAB } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const EditScreen = (props) => {
  const { dataId, id } = props.route.params;
  const optionsImportant = ["high", " average", "low"];
  const optionsNecessary = ["yes", "maybe", " no"];
  const firestore = useFirestore();

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [stateInputs, dispatchInputs] = useReducer(inputReducer, init(dataId));

  const submit = () => {
    if (!stateInputs.formIsValid) {
      alert("Don't leave field empty please");
      return;
    }
    firestore.update(`Cards/${id}`, { format: stateInputs.inputValues });
    props.navigation.navigate("list");
  };

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
    <KeyboardAvoidingView style={{ flex: 1 }}
    behavior="height"
        >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TextInput
            style={{ ...styles.title, fontSize: 60 }}
            onChangeText={inputTextHolder.bind(this, "productName")}
            value={stateInputs.inputValues.productName}
          />

          <View style={{ elevation: 10 }}>
            <Image
              style={styles.image}
              source={{ uri: stateInputs.inputValues.application.avatar }}
            />
          </View>
        </View>

        <ScrollView style={{ width: "100%",  }}>
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
              color={stateInputs.inputValues.important.color}
            >
              <DropDownComp
                option={optionsImportant}
                value={stateInputs.inputValues.important.value}
                onValueChange={(value) =>
                  dispatchInputs({
                    type: CHOICES,
                    value: value.value,
                    color: value.color,
                  })
                }
              />
            </Lights>

            <Lights
              title="Necessary?"
              color={stateInputs.inputValues.necessary.color}
            >
              <DropDownComp
                option={optionsNecessary}
                value={stateInputs.inputValues.necessary.value}
                onValueChange={(value) =>
                  dispatchInputs({
                    type: CHOICE,
                    value: value.value,
                    color: value.color,
                  })
                }
              />
            </Lights>
          </View>
          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              height: "20%",
              marginVertical: 10,
            }}
          >
            <Observation observation={stateInputs.inputValues.observation}>
              <TextInput
                style={{ ...styles.title, fontSize: 30 }}
                onChangeText={inputTextHolder.bind(this, "observation")}
                value={stateInputs.inputValues.observation}
              />
            </Observation>
          </View>
          
        </ScrollView>

        <FAB
          style={styles.fab}
          icon={() => <AntDesign name="check" size={27} color="black" />}
          onPress={submit}
        />
        {/* <View
            style={{flex:1,paddingBottom:50 ,}}
          />  */}
        {/* <CircleButton
      
        style={{  height:80 , width:80}}
        img={{width:80, height:80 }}
        src={{uri:"https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f289947c950b95d8e1efa2f/de27745669e300a78ec467bc058725fb/check.png"}}
      /> */}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
   
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginHorizontal:20,
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
    borderRadius: 30,
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
  fab: {
    height: 80,
    width: 80,
    borderRadius: 100,
position: "relative",
    margin: 16,
    left:0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.stateBar,
  },
});
export default EditScreen;
