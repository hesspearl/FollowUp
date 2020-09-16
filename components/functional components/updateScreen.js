import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

 const Update= (props) =>{
const {id}=props.route.params;
    
   useFirestoreConnect(['Cards']);

   const cards = useSelector(({ fireStore: {ordered } }) => ordered.Cards);

   if (isLoaded(cards)) {
      //get card with same id
      let newData=cards.filter((i)=>i.id===id)
      

      props.navigation.navigate("list", {newData:newData})
    }


return (
  
<View>

</View>
)
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Update;