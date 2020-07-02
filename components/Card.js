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
     

          <View style={{flexDirection:"row",}}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.picture }} />
            </View>

            <View style={styles.details} >
            
                <Text style={styles.title}>  {props.product}</Text>
            
              
              <Text style={styles.report}>
              - {props.type}-</Text>
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
    backgroundColor: colors.textBack

  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
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