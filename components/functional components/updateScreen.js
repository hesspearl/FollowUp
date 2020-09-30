import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector , useDispatch } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import * as actions from "../../store/actions/filter"

 const Update= (props) =>{
const {id}=props.route.params;
    
   useFirestoreConnect(['Cards']);

   const cards = useSelector(({ fireStore: {ordered } }) => ordered.Cards);
const dispatch = useDispatch()


   if (isLoaded(cards)) {
    //  get card with same id
      let newData=cards.filter((i)=>i.id===id)
      const state = useSelector(state => state.filter.months)
      const replace =state.findIndex((i) => i.id === newData[0].id )
     state[replace]=newData[0]

     //
    dispatch(actions.deleteFilter())
      
      props.navigation.navigate("list",)
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