import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../colors";

const ObservationField = (props) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.text}> observation</Text>
        <TouchableOpacity onPress={()=> setShow(!show)}>
        <Image
          style={styles.img}
          source={
            show
              ? {
                  uri:
                    "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/3a564d6baefe7b38e597eebece3118c4/bolha-do-discurso-quadrado.png",
                }
              : {
                  uri:
                    "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/19a86db3c602193633f80f685412ea55/image.png",
                }
          }
        />
        </TouchableOpacity>
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={{ padding: 5, fontSize: 30 }}
          onChangeText={props.onChangeText}
          value={props.value}
          keyboardType={props.keyboardType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",

    height: "30%",
    marginBottom: 40,
  },
  text: {
    fontSize: 30,
    marginLeft: 15,
    fontFamily: "Piedra",
  },
  inputs: {
    justifyContent: "flex-start",
    padding: 10,
    margin: 15,
    elevation: 5,
    borderRadius: 10,
    borderBottomColor: "black",
    borderTopColor: "white",
    borderWidth: 0.5,
    backgroundColor: colors.textBack,
    height: "100%",
  },
  img:{
      width:100,
      height:100,
      alignSelf:"flex-end"
  }
});
export default ObservationField;
