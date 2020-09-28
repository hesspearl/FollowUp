import React , {useEffect} from 'react'
import { View, Text, StyleSheet,FlatList } from "react-native";
import colors from "../../colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const listLayout= props =>{

    const {array , Handler, selected ,clean }=props



    useEffect(() => {
      if(clean){clean()}
    }, [clean])

return (
    array.map((item, index) =>(
        <View key={index}>
          <TouchableOpacity
           onPress={() => Handler(index)}>
            <View
              style={{
                ...styles.container,
                backgroundColor: selected === index ? "black" : colors.textBack,
              }}
            >
              <Text
                style={{
                  ...styles.title,
                  color: selected === index ? "white" : "black",
                }}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    )
)
}
const styles = StyleSheet.create({
    container: {
      width: 100,
      height: 50,
  
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 10,
    },
    title: {
      fontFamily: "SpartanBold",
      fontSize: 20,
      //color:"white"
    },
  });
export default listLayout;