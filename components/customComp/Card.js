import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../colors";

const Cards = (props) => {
  return (
   
        <View style={styles.product}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.picture }} />
        </View>

        <View style={styles.details}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}> 
            {props.product}
          </Text>
        </View>
      </View>
    </View>
   
  
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
   borderRadius:20,
    backgroundColor: colors.textBack,
    
    width: "100%",
    
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: 70,
    height: 70,
    marginLeft: 20,
    borderWidth: 1,
    margin: 10,
    borderRadius: 40,
  },
  image: {
    width: 65,
    height: 65,

    borderRadius: 50,
  },
  details: {
    //flex:1,
    justifyContent: "space-evenly",
    marginHorizontal: 20,
    width: "75%",
  },
  title: {
    fontFamily: "Piedra",
    fontSize: 40,
  },
  report: {
    fontFamily: "Piedra",
    fontSize: 30,
    color: "#888",
  },
});
export default Cards;
