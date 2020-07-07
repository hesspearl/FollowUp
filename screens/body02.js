import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import TextField from "../components/TextField";
import SwitchSelector from "../components/SwitchSelector";
import colors from "../colors";
import DatePicker from "@react-native-community/datetimepicker";
import { SimpleLineIcons } from '@expo/vector-icons';
import moment from "moment";

const necessary = ["yes", " no", "maybe"];

const Body02 = (props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>

    <View style={styles.rowContain}>
      <View style={styles.background}>
         <Text
      style={{fontSize:20}}
       onPress={() => setShow(true)}>
        {moment.utc(date).format("DD/MM/YYYY")}
      </Text>
      </View>
      <View style={styles.background} >
      <SimpleLineIcons name="picture" size={24} color="black" />
      </View>
    </View>
     

      {show && (
        <DatePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <TextField style={{ height: "30%" }}>observation</TextField>

      <SwitchSelector option={necessary}>is it necessary?</SwitchSelector>
    <View style={styles.button}>
      <Button color={colors.buttons} 

      title="FINISHED" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: "80%",
  height:"10%",
    elevation: 6,
  },
  background:{
   
    elevation: 5,
    borderRadius: 10,
    borderBottomColor: "black",
    borderTopColor: "white",
    borderWidth: 0.5,
    backgroundColor: colors.textBack,
  height:"30%",
  width:"40%",
  alignItems:"center",
  justifyContent:"center"
  },
  rowContain:{
    flexDirection:"row"
  , width:"100%"
  , alignItems:"center"
  , justifyContent:"space-around"}
});
export default Body02;
