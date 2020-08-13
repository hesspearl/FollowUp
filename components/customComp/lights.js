import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import colors from "../../colors"

const Lights= props =>{
return (
    <View style={styles.container}>
         <View style={{marginLeft:20, marginTop:20}} >
    <Text style={styles.txtDescribe}>{props.title}</Text>
  </View>
  <View style={styles.background}>
            <View
              style={{
                ...styles.colorCircle,
                backgroundColor: props.color,
              }}
            />
            {/* <Text style={styles.textInside}>{props.value}</Text> */}
            {props.children}
          </View>
    </View>
   
)
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row", 
    width:"100%", 
    justifyContent:"space-between"
  ,
},
    txtDescribe: {
        fontSize: 30,
        fontFamily: "Piedra",
      
      },
      background: {
        flexDirection: "row",
        borderRadius: 50,
        marginTop: 10,
        backgroundColor: colors.textBack,
        padding: 10,
       width: "40%",
       zIndex:-500,
        alignItems: "center",
        //justifyContent: "space-around",
      },
      colorCircle: {
        borderRadius: 50,
        height: 50,
        width: 50,
      },
      textInside: {
        fontSize: 27,
        fontFamily: "Piedra",
        marginLeft: 20,
      },
})
export default Lights;