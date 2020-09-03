import React, { useReducer, useState, useEffect } from "react";
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
import { useDispatch , useSelector } from "react-redux";
import { useFirestore, isLoaded } from "react-redux-firebase";
import colors from "../colors";
import * as actions from "../store/actions/format"
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
  const dispatch = useDispatch()
const state = useSelector(state =>  state.format.edit)
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [stateInputs, dispatchInputs] = useReducer(inputReducer, init(dataId));
  //console.log(stateInputs)
  


  useEffect(() => {
    dispatch(actions.edit(stateInputs.inputValues))
  }, [stateInputs.inputValues])


  const submit = () => {
    if (!stateInputs.formIsValid) {
      alert("Don't leave field empty please");
      return;
    }
   
  console.log(state)
    firestore.update(`Cards/${id}`, { format: state });
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

  useEffect(() => {
    props.navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.background,
      },
  
      headerTitle:() => <Text
      style={{fontSize:30, alignSelf:"center", fontFamily: "Piedra",}}
      >Editing my purchase</Text>,
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate("list")}>
          <Image
            style={{ width: 30, height: 30, marginLeft:10 }}
            source={{
              uri:
                "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f46e37fdc10ed5b3c2bd8a6/bbb0a5b7cce06aad27996ff3de6c2cc6/close.png",
            }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={submit}>
          <Image
            style={{ width: 40, height: 40 , marginRight:10 }}
            source={{
              uri:
                "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f46e37fdc10ed5b3c2bd8a6/74f50c68f5f4f44d63340858c8d151aa/correct.png",
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [ state]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.content}>
          
          </View>

          <View style={{ elevation: 10, marginTop: 5 }}>
            <TouchableOpacity onPress={() => setShow(true)}>
              <Image
                style={styles.image}
                source={{ uri: stateInputs.inputValues.application.avatar }}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.editContainer}>
            <Image
              style={styles.edit}
              source={{
                uri:
                  // "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f46e37fdc10ed5b3c2bd8a6/69b491b216e5844d348b33dac7a9fca7/draw.png"
                  "https://s3-alpha-sig.figma.com/img/e0fb/7988/359b5222ffbd5a5d5986151c959f9138?Expires=1600041600&Signature=Tc2iDLGWOomVtuAzjly0QgKoZfovjPA9r7ua5avyhKYNZg~EW-Yezjez57shbpjwmTvEZGesx4GNfB-BfdyAa~i91aa0zyaipj0-dB9CiiWbUreQV9ItQ5~-nAN5mFOFzZwGYLsjBuu7LdUQoSUpsDyP38I299nN6nTUvEc-fLhtG13AhZxiTg71dCAInV4Hp54q7-LJfhcdeRQDOo6Jv39fxBoCnH56HI7obgP81rCHURYnOLmAYYULv-Tj7DvYbUkTGBCH~giRsCZFxPTnDxQqohak54XU032xZ1VSEzTT1P09JYz8tP-0vAGTJpO4K9Vwi~j5A1U3NhXr8ODHFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              }}
            />
          </View>
        </View>

        <ScrollView style={{ width: "100%", zIndex: -10 }}>
          <View style={styles.titlesContain}>
            <TextInput
              style={{ ...styles.title, fontSize: 50 }}
              onChangeText={inputTextHolder.bind(this, "productName")}
              value={stateInputs.inputValues.productName}
            />
            <TouchableOpacity onPress={() => setShow(true)}>
              <View>
                <Text style={styles.title}>
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
                style={{ ...styles.title, fontSize: 30, marginRight: 60 }}
                onChangeText={inputTextHolder.bind(this, "observation")}
                value={stateInputs.inputValues.observation}
              />
            </Observation>
          </View>
        </ScrollView>
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
    marginHorizontal: 20,
    fontFamily: "Piedra",
    fontSize: 40,
    margin: 15,
  },
  imageContainer: {
    width: "100%",
    // height: "50%",
    alignItems: "center",
    borderBottomWidth: 1,
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

    top: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.stateBar,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },

  edit: {
    width: 35,
    height: 35,
    alignSelf: "center",
    //
  },
  editContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,

    // zIndex:10,
    justifyContent: "center",
    backgroundColor: "white",
    position: "relative",
    top: 40,
  },
});
export default EditScreen;
