import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import colors from "../colors"


const DetailsScreen= props =>{
return (
    <View style={styles.container}>
          <Text style={styles.title}>  {props.product}</Text>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.picture }} />
            </View>
            <Text style={styles.title}>  {props.product}</Text>
            <Text style={styles.title}>  {props.product}</Text>
            <Text style={styles.title}>  {props.product}</Text>

            <View style={styles.rowContain}>
      <View style={styles.background}>
      <View style={styles.colorCircle}/>
         <Text
      >
      {props}
      </Text>
     
      </View>
      <View style={styles.background} >
      <Text
      >
      {props}
      </Text>
      <View style={styles.colorCircle}/>
   
      </View>
    </View>
    </View>
)
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
        marginVertical:20
    },
    title: {
        fontFamily:"Piedra",
            fontSize:40,
           
          },
          imageContainer: {
            width: 100,
            height: 100,
        flex:1,
            margin:20
          },
          image: {
            width: '100%',
            height: '100%',
           
          },
          rowContain:{
            flexDirection:"row"
          , width:"100%"
          , alignItems:"center"
          , justifyContent:"space-between"},
          background:{
   
         
            borderRadius: 50,
            
            backgroundColor: colors.textBack,
          height:"30%",
          width:"40%",
          alignItems:"center",
          justifyContent:"space-around"
          },
          colorCircle:{
            borderRadius: 50,
            height:50,
            width:50
          }
})
export default DetailsScreen;