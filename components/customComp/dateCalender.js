import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import moment from "moment";
import DatePicker from "@react-native-community/datetimepicker";

const DateCalender= props =>{

    
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.value;
    props.open(false);

    const newDate = moment(currentDate).format("DD/MM/YYYY");

    props.newDate(newDate)

    
  };
return (
<DatePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={props.value}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
)
}

const styles= StyleSheet.create({})
export default DateCalender;