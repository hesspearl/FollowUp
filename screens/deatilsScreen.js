import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from "../colors"


const DetailsScreen= props =>{

  const {data}=props.route.params
return (
    <View style={styles.container}>
    
    <Text style={{...styles.title,fontSize:60}}>  {data.product}</Text>
    
        
          <View style={styles.imageContainer}>
              <Image style={styles.image}
               source={{ uri: data.picture }} />
            </View> 
            <Text style={styles.title}>  {data.type}</Text>
            <Text style={styles.title}>  {data.date}</Text>
            <Text style={styles.title}>  {data.price}</Text>

            <View style={styles.rowContain}>
      <View style={styles.background}>
      <View style={{...styles.colorCircle,
      backgroundColor:data.important.color}}/>
         <Text
          style={styles.textInside}
      >
      {data.important.type}
      </Text>
     
      </View>
      <View style={styles.background} >
      <Text
      style={styles.textInside}
      >
      {data.necessary.type}
      </Text>
      <View style={{...styles.colorCircle,
      backgroundColor:data.necessary.color}}/>
   
      </View>
    </View>

    <View style={styles.textbox}>
      <Text
      style={{fontSize:30, textAlign:"center"}}>
{data.observation}
      </Text>
    </View>
    </View>
)
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    title: {
        fontFamily:"Piedra",
            fontSize:40,
          margin:5
          },
          imageContainer: {
            width: "80%",
            height: "24%",
            
            
          },
          image: {
            width: '100%',
            height: '100%',
           
          },
          rowContain:{
            flexDirection:"row"
          , width:"100%",
          height:"10%",
           alignItems:"center"
          , justifyContent:"space-between"},
          background:{
   
            flexDirection:"row",
            borderRadius: 50,
            
            backgroundColor: colors.textBack,
         padding:10,
          width:"40%",
          alignItems:"center",
          justifyContent:"space-around"
          },
          colorCircle:{
            borderRadius: 50,
            height:50,
            width:50
          },
          textbox:{
            backgroundColor:colors.textBack,
            width:"100%",
            height:"25%",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:20,
            margin:10

          },
          textInside:{
            fontSize:27,
          fontFamily:"Piedra"}
})
export default DetailsScreen;