import React from 'react'
import colors from "../colors"
import SwitchSelector from "react-native-switch-selector";
import { Text, View} from 'react-native';


const switchSelector= props =>{
    const options = [
        { label: props.option[0], value: "1" },
        { label: props.option[1], value: "1.5" },
        { label: props.option[2], value: "2" }
      ];

return (
    <View>
    <Text style={{fontSize:20, margin:10}}>
        {props.children}
    </Text>
<SwitchSelector
      textColor={"black"}
  selectedColor={"white"}
  buttonColor={colors.buttons}
  borderColor={"purple"}
  options={options}
  borderRadius={6}
  style={{width:"80%", height:"10%"}}
  initial={0}
  onPress={value => value}
/>
</View>
)
}

export default switchSelector;