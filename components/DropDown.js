import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown= props =>{
return (
<View style={{width:"80%" , height:"5%"}}>
<Text style ={{fontSize:20, margin:10 , marginBottom:15}}>
          Application
          </Text>
          <DropDownPicker
    items={[
        {label: 'beauty', value: 'uk'},
        {label: 'work', value: 'france'},
        {label: 'alimentations', value: 'france'},
        {label: 'with friends', value: 'france'},
        {label: 'games', value: 'france'},
        {label: 'essentials', value: 'france'},
        {label: 'needless', value: 'france'},
        {label: 'others(observation)', value: 'france'},
    ]}
  
    containerStyle={{height: "100%" , width:"100%"}}
    style={{backgroundColor: '#fafafa', }}
    labelStyle={{
    fontSize: 20,
    textAlign: 'left',
    color: '#000'
}}
    dropDownStyle={{backgroundColor: '#fafafa' , height:80}}
    zIndex={5000} 
/>
</View>
)
}

const styles= StyleSheet.create({})
export default DropDown;