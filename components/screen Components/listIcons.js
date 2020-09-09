import React from 'react'
import { View,TouchableOpacity, StyleSheet } from 'react-native';

const ListIcons= props =>{
return (
<View style={{ alignItems:"center"}}>
<TouchableOpacity>
  {props.children}
</TouchableOpacity>

<View style={{...styles.selected, backgroundColor:props.color}}/>
</View>
)
}

const styles= StyleSheet.create({

    selected:
    {width:60 , 
        height: 10 ,
 
          marginTop:5}
})
export default ListIcons;