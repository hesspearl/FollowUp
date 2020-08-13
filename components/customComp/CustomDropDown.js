import React, {useRef, useEffect, useState} from "react";
import { View, Text, StyleSheet, Modal , TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-community/picker";
import SwitchSelector from "react-native-switch-selector";
import colors from "../../colors"
import BottomSheet from 'reanimated-bottom-sheet'




const DropDownComp = (props) => {
 
 const [visible, setVisible] = useState(false)

 
 
  const options = [
    {
      label: props.option[0],
      value: { value: props.option[0], color: "green" },
    },
    {
      label: props.option[1],
      value: { value: props.option[1], color: "yellow" },
    },
    { label: props.option[2],
         value: { value: props.option[2], color: "red" } },
  ];
  

  



const onValueChange=(value)=>{
  props.onValueChange(value)
  return setVisible(false)
}

  return (
<View style={styles.container}>
<Modal

            animationType="fade"
             transparent={true}
            visible={visible}
            presentationStyle="overFullScreen"
            onRequestClose={()=> setVisible(false)}
          >
          <View style={{flex:1,justifyContent:"center" ,alignItems:"center"}}>
               {options.map((i,index)=>
       
      ( 
        
        <View style={{
        width:"60%",
         height:"10%",
          backgroundColor:"white",
          justifyContent:"center", 
          alignItems:"center"}} >
          
          <View key={index}>
            
       <TouchableOpacity onPress={()=>onValueChange(i.value)}>
         <Text style={{fontSize:20, fontFamily: "Piedra"}}>{i.label}</Text>
       </TouchableOpacity>
          </View>
        
      </View> )
            )} 
          </View>
          
          </Modal>

       <TouchableOpacity onPress={()=> setVisible(true)}>
          <Text style={{margin:20}}>{props.value}</Text>
        </TouchableOpacity>

    </View>
      

  )}


const styles = StyleSheet.create({
  down: {},
});

export default DropDownComp;
{
  /* <DropDownPicker
      items={options}
  //  defaultValue={props.value}
    containerStyle={{height: 40 ,width:100}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa', }}
    onChangeItem={props.onChangeItem}
    zIndex={5000} 
/>  */
}

{/* <BottomSheet
        ref={ref}
          snapPoints = {["15%",0]}
          initialSnap={1}
         callbackNode={animation}
          renderContent ={inner}
          enabledGestureInteraction={true}
        renderHeader = {renderHeader}
        />    */}

        /*<Picker
  selectedValue={value}
  style={{height: 20, width: 100}}
  
  onValueChange={(itemValue, itemIndex) =>
  // props.onValueChange
   setValue({value:itemValue})
  }>

 { options.map((i , index)=>(
   <Picker.Item key={index} label={i.label} value={i.value} />))
  }
 
  
</Picker>*/