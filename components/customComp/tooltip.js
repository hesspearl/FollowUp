import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Tooltip } from 'react-native-elements';

const tooltips= props =>{
    const{forwardRef, tip, close}=props
return (
<Tooltip
ref={forwardRef}
onClose={close}
//backgroundColor={"black"}
ModalComponent={Modal}

width={400}
height={100}
 popover={
 <Text
 style={styles.title}>{tip}</Text>}>
  {props.children}
</Tooltip>
)
}

const styles= StyleSheet.create({
    title: {
        fontFamily: "Spartan",
        fontSize: 23,
        color:"white",
       
       // marginVertical:5
      },
})
export default tooltips;