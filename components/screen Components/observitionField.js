import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const ObservationField = (props) => {
  const [show, setShow] = useState(false);

  const onSubmit = (value) => {
    if (value.trim().length > 0) {
      setShow(true);
      props.onChangeText(value);
    } else {
      setShow(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        {show ? (
          <Image
            style={styles.img}
            source={{
              uri:
                "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/3a564d6baefe7b38e597eebece3118c4/bolha-do-discurso-quadrado.png",
            }}
          />
        ) : (
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/19a86db3c602193633f80f685412ea55/image.png",
            }}
          />
        )}

        <Text style={styles.text}> observation</Text>
      </View>
      <TextInput
        style={{ padding: 5, fontSize: 30 }}
        onChangeText={(value) => onSubmit(value)}
        placeholder={"write something "}
      />
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 2,
    padding: 10,
    borderBottomWidth: 2,
    paddingBottom: 30,
    height: 110,
    marginBottom: 40,
    borderColor: "#cac7c7",
  },
  text: {
    fontSize: 40,
    marginLeft: 15,
    fontFamily: "Piedra",
  },
  inputs: {
    // justifyContent: "flex-start",
    // padding: 10,
    // elevation: 5,
    // borderRadius: 10,
    // borderBottomColor: "black",
    // borderTopColor: "white",
    // borderWidth: 0.5,
    // backgroundColor: colors.textBack,
    // height: 60,
  },
  img: {
    width: 43,
    height: 43,
    alignSelf: "flex-end",
  },
  field: {
    flexDirection: "row",
    //justifyContent: "space-between" ,
  },
});
export default ObservationField;
