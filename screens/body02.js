import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import TextField from "../components/TextField";
import SwitchSelector from "../components/SwitchSelector";
import colors from "../colors";
import DatePicker from "@react-native-community/datetimepicker";
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
      <Text
      style={{fontSize:20}}
       onPress={() => setShow(true)}>
        {moment.utc(date).format("DD/MM/YYYY")}
      </Text>

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

      title="press" />
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
});
export default Body02;
