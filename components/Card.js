import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  
} from "react-native";
import colors from "../colors"

const Cards = props => {
   return (
    <View style={styles.product}>
     

          <View style={{flex:1, flexDirection:"row"}}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.picture }} />
            </View>

            <View style={styles.details} >
            
                <Text style={styles.title}>  {props.product}</Text>
            
             
            </View>

          </View>

    
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderBottomColor:"black",
    borderBottomWidth:2,
    backgroundColor: colors.textBack,
    elevation:10,
    

  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: 80,
    height: 80,
   

    margin:10
  },
  image: {
    width:80,
    height: 80,
  
    borderRadius:50
   
  },
  details: {
  flex:1,
  justifyContent:"space-evenly",
 marginHorizontal:20
  },
  title: {
fontFamily:"Piedra",
    fontSize:40,
   
  },
  report: {
    fontFamily:"Piedra",
    fontSize: 30,
    color: '#888',
   
    

  },

});
export default Cards;