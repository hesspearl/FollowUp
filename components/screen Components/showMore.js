import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ShowMore = (props) => {

    const [show, setShow] = useState(false)
  return (
    <>
      <TouchableOpacity onPress={()=>setShow(!show)}>
        <View style={styles.show}>
          <Text style={styles.txtDescribe}> Show more</Text>
          <AntDesign
            name="down"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
      </TouchableOpacity>

    {show&& <View style={styles.field}>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          {props.observation.length > 0 ? (
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
        <View>
          <Text style={{ ...styles.txtDescribe, marginVertical: 10 }}>
            {props.observation}
          </Text>
        </View>
      </View>}
    </>
  );
};

const styles = StyleSheet.create({
  show: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  txtDescribe: {
    fontSize: 30,
    fontFamily: "Piedra",
  },
  field: {
    marginVertical: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 43,
    height: 43,
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 40,
    marginLeft: 15,
    fontFamily: "Piedra",
  },
});
export default ShowMore;
