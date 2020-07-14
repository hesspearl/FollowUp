import React , {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useFirestore,  } from 'react-redux-firebase'
import {  useSelector } from "react-redux";

const LoadingScreen= props =>{

    const [show, setShow] = useState(false);
    const data = useSelector(state=>state.format)
    
const firestore= useFirestore()


 firestore.add('Cards', {
    ...data,
    createdAt: firestore.FieldValue.serverTimestamp()
  })

  useEffect(() => {
      props.navigation.navigate("start")
     
  }, [data , firestore])



return (
<View style={styles.container}>
    
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
export default LoadingScreen;