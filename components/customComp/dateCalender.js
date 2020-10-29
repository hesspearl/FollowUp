import React, {useCallback} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import moment from "moment";
import DatePicker from "@react-native-community/datetimepicker";
import { returnValidation} from "../../store/actions/modalState"
import { useDispatch } from "react-redux";

const DateCalender= props =>{
const dispatch = useDispatch()
   
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.value;
    if(props.open)
    {props.open(false)}
    dispatch(returnValidation())

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