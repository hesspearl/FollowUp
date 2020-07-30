import React, { useState, useEffect } from "react";
import { FAB, Portal, Provider } from "react-native-paper";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import CircleButton from "../components/CircleButton";
import colors from "../colors"

const fab = (props) => {
  

  const [open, setOpen] = useState(false);

  const changePosition = new Animated.Value(0);
  const changeOpacity= new Animated.Value(0)



  const useMove = (toValue ) => {
    Animated.timing(changePosition, {
      toValue,
      //duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
//delay:500
    }).start();
  };


  const positionY = changePosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 170],
  });
  const positionEdit = changePosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0,5],
  });
  const positionDelete = changePosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0,13],
  });

  useEffect(() => {
    if (open) {
   useMove(1)
      
    } else {
      useMove(0);
    }
  }, [open]);

  return (
    <View >
      <Animated.View
        style={{
          transform: [{ translateY: positionY }],
        }}
      >
        <CircleButton
          img={{width:40,height:40}} onPress={() => setOpen(!open)} 
        style={{width:55,height:55, backgroundColor:colors.stateBar}} 
src={{uri:"https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f1c4ea246e9df0461740000/8c0825cdd6f63c6ab92534cd4077bf46/arrow_poiting_down_no_background.png"}}
        />
      </Animated.View>
      <Animated.View
      style={{
        
          transform: [
            {scale:changePosition},
            { translateY: positionEdit }],
        }}>
          <CircleButton
            img={styles.img} 
          onPress={props.delete}
          style={styles.container}
          src={{uri:"https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f1c4ea246e9df0461740000/827eaeb69a6d09069231ac25c8021a30/lixo.png"}}
        />
      </Animated.View>
    <Animated.View
    style={{
     
          transform: [
            {scale:changePosition},
            { translateY: positionDelete }],
        }}
    >
       <CircleButton style={styles.container}
       img={styles.img}
       src={{uri:"https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f1c4ea246e9df0461740000/1812944bc0f48c288cee3b58267b9fac/correcao.png"}}
     />
    </Animated.View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //position:"absolute",
    backgroundColor:colors.icons,
    width: 45,
    height: 45,
  },
  img:{
width:30,
height:30
  }
});
export default fab;
