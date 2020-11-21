import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet,ScrollView } from "react-native";
import Setting from "../assets/settings.svg";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { FontAwesome, AntDesign  } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { InputModal, TextModal } from "../components/customComp/inputModal";

const settingScreen = (props) => {

  const profile = useSelector((state) => state.firebase.profile);
const [name, setName] = useState(profile.displayName?profile.displayName:profile.username)
 const [show, setShow] = useState(false)
  const firebase=useFirebase()

  const currency = require("../modals/country-by-currency-code.json");
    



  return (
    <View style={styles.container}>
    <View style={{
      flexDirection:"row", 
    justifyContent:"space-between", 
    width:"100%",
    paddingHorizontal:20,
    marginVertical:15}}>
    <TouchableOpacity onPress={()=> props.navigation.goBack()}>
            <FontAwesome name="chevron-left" size={24} color="black" />
    </TouchableOpacity>
 
    
    <TouchableOpacity onPress={()=>{  firebase.updateProfile({
      displayName:name
    })
    ,
    props.navigation.navigate('start')}}>
          <FontAwesome name="check" size={28} color="black" />
          </TouchableOpacity>
    </View>

      <View style={styles.body}>
        <Setting width="300" height="200" />
        <View style={styles.blockContainer}>
          <View style={styles.inputsContainer}>
            <Text style={styles.text}>Name :</Text>
            <TextInput 
              value={name}
              onChangeText={(text)=>setName(text)}
              style={styles.text}
            />
          </View>

          <TouchableOpacity onPress={()=> setShow(true)}>
             <View style={styles.inputsContainer}>
            <Text style={styles.text}>Country :</Text>
            <Text style={styles.text}> {profile.currency.country}</Text>
            <View style={{ marginVertical: 13, marginLeft:20 }}>
          <AntDesign name="right" size={15} color="black" />
        </View>
             </View>
          </TouchableOpacity>
         
       <InputModal visible={show}
       onRequestClose={()=>setShow(false)}>
{currency.map((items,key)=>(
  
  <View key={key} style={{flexDirection:"row", justifyContent:"space-between"}}>
 
     <Text style={styles.text}>{items.country}</Text>
    <Text style={styles.text}>{items.currency_code} </Text>

  </View>
  
))}
         </InputModal>

     
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  body: {
    width: "80%",
    height: "80%",
    elevation: 10,
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginVertical: 10,
    alignItems: "center",
  },
  blockContainer: {
    height: "50%",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  inputsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 20,
  },
  text: {
    fontFamily: "Spartan",
    padding: 10,
  },
});
export default settingScreen;
