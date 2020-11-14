import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  
} from "react-native";
import LogButton from "../components/customComp/logButton";
import { Entypo } from "@expo/vector-icons";
import Search from "../assets/search.svg";
import Wallet from "../assets/wallet.svg";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
import * as Google from "expo-google-app-auth";
import { ActivityIndicator } from "react-native-paper";

const LogScreen = (props) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [height, setHeight] = useState(410);

  
  const auth = useSelector((state) => state.firebase.auth);
  

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    //  Don't forget to cleanup with remove listeners
  }, [Keyboard]);

  const _keyboardDidShow = () => {
    setHeight(500);
  };

  const _keyboardDidHide = () => {
    setHeight(410);
  };
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, marginTop: 50 }}>Follow</Text>
      <View style={{ position: "absolute", right: 20, top: 110 }}>
        <Text style={{ ...styles.title, fontFamily: "SpartanBold" }}>Up</Text>
      </View>
      <Wallet
        width="300"
        height="200"
        style={{ position: "absolute", top: 150 }}
      />
      <View style={{ ...styles.bottom, height: height }}>
        {!showSignIn && (
          <Login show={setShowSignIn} navigation={props.navigation} />
        )}
        {showSignIn && <SignIn show={setShowSignIn} />}
      </View>
    </View>
  );
};

const Login = (props) => {
  const firebase = useFirebase();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
 const [loading, setLoading] = useState(false)
 

  const logIn = () => {
     
    firebase
      .login({
        email: userEmail,
        password: userPassword,
      })
     
      .catch((err) => {
        alert(err);
      });
    
  };

  const google = async () => {
    setLoading(true)
    try {
      const { accessToken, idToken, type } = await Google.logInAsync({
        androidClientId:
          "723196642127-annm7c8dombas44vobopnamt8g3h6qs4.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (type === "success") {
        setLoading(false)
       
        firebase.login({
          credential: firebase.auth.GoogleAuthProvider.credential(
            idToken,
            accessToken
          ),
        });
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
    }
  };

  const signInWithGoogle = () => {
    google();
  };


  return (
    <View>
      <Input
        name="mail"
        title="Enter your email"
        onChangeText={(text) => setUserEmail(text)}
      />

      <Input
        name="lock"
        title="Enter password"
        secureTextEntry={true}
        onChangeText={(text) => setUserPassword(text)}
      />
        <TouchableOpacity onPress={() => props.show(true)}>
             <Text style={styles.text}>forgot your password?</Text>
        </TouchableOpacity>
   
      <LogButton title="Log in" onPress={logIn} />
    <TouchableOpacity onPress={() => props.show(true)}>
        <Text style={styles.text}>you don't have account? click here</Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          flex: 1,
        }}
      >
        <Text style={styles.text}>- or -</Text>
        {!loading? <TouchableOpacity onPress={() => signInWithGoogle()}>
          <Search style={{ width: 30, height: 30 }} />
        </TouchableOpacity>:<ActivityIndicator/>}
      </View>
    </View>
  );
};

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const firebase = useFirebase();

  const sign =() => {
    const regEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

     if(!password||!email||!username||!confirmPassword){
      alert("please don't let field empty")
      return
     }
     
    if(!regEmail.test(email.toLowerCase())){
   
      alert("not valid email")
      return
    }

    if(confirmPassword!=password){
      alert("password not matching")
      return
    }
     else{
    props.show(false);
   firebase.createUser({ email, password }, {username, email});

  
     }
  };

  return (
    <View>
      <Input
        name="user"
        title="Enter user name"
        onChangeText={(text) => setUsername(text)}
        type="name"
      />
      <Input
        name="mail"
        title="Enter your email"
        onChangeText={(text) => setEmail(text)}
        type="email"
      />
      <Input
        name="lock"
        title="Enter password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        type="password"
      />
      <Input
       name="lock"
       title="Enter password again"
        secureTextEntry={true}
        type="password"
        onChangeText={(text) => setConfirmPassword(text)}
        />
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <LogButton title="return" onPress={()=> props.show(false)} />
<LogButton title="sign up" onPress={sign} />
        </View>     

 
    </View>
  );
};

const Input = (props) => {
  return (
    <View style={styles.input}>
      <Entypo
        name={props.name}
        size={30}
        color="black"
        style={{ alignSelf: "center" }}
      />
      <TextInput
        {...props}
        style={{...styles.textInput, ...props.style}}
        placeholder={props.title}
        placeholderTextColor="black"
        onChangeText={props.onChangeText}
        autoCompleteType={props.type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between", alignItems: "center" },
  image: { width: 300, height: 200 },
  title: { fontSize: 60, fontFamily: "Spartan" },
  bottom: {
    backgroundColor: "white",
    width: "90%",
    borderTopWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginTop: 10,
    alignItems: "center",
    paddingTop: 10,
  },
  input: {
    width: 300,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    paddingStart: 20,
    backgroundColor: "white",
  },
  textInput: {
    paddingStart: 20,
    fontFamily: "Spartan",
    width: 200,
    fontSize: 18,
  },
  text: {
    fontSize: 14,
    fontFamily: "SpartanBold",
    marginHorizontal: 15,
  },
});
export default LogScreen;
