import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Update} from "../functional components/updateScreen"
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import moment from "moment";

const todosQuery = {
  collection: "Cards",
  queryParams: ["orderByChild=createdAt"],
};
const Selectable = (props) => {
  const { array, cardsItem } = props;
  const [selected, setSelected] = useState();
  const [item, setItems] = useState([])
 

  useEffect(() => {
    cardsItem([...item])
    
  }, [item])
  
    useFirestoreConnect(['Cards']);

    const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);

 //
  
  // function that return the month selected
  const Handler=(index)=>{
    let items=[]
    setSelected(index)

    for(const card of cards){
      let date= moment(card.format.date, 'DD/MM/YYYY', true).format()
    
    if(moment(date).month()===index){
      if(moment(date).format('DD/MM/YYYY')=== card.format.date){
        items.push(card)
      }
    }
  
  }
//aug
  setItems([...items])
    
  }

  return array.map((item, index) => (
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
  ));
};

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
export default Selectable;
