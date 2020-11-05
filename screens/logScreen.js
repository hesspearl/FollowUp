import React, { useState, useEffect} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import LogButton from "../components/customComp/logButton";
import { Entypo } from "@expo/vector-icons";

import Wallet from "../assets/wallet.svg";

const LogScreen = (props) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [height, setHeight] = useState(410);

 
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    //  Don't forget to cleanup with remove listeners
    
  }, [Keyboard]);

  const _keyboardDidShow = () => {
    setHeight(500)
  }

  const _keyboardDidHide = () => {
    setHeight(410)
  }
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, marginTop: 50 }}>Follow</Text>
      <View style={{ position: "absolute", right: 20, top: 110 }}>
        <Text style={{ ...styles.title, fontFamily: "SpartanBold" }}>Up</Text>
      </View>
      <Wallet width="300" height="200" style={{position:"absolute", top:150}} />
      <View style={{...styles.bottom, height:height}}>
        {!showSignIn && <Login show={setShowSignIn} />}
        {showSignIn && <SignIn show={setShowSignIn} />}
      </View>
    </View>
  );
};

const Login = (props) => {
  return (
    <View>
      <Input name="mail" title="Enter your email" />

      <Input name="lock" title="Enter password" />
      <Text style={styles.text}>forgot your password?</Text>
      <LogButton title="Log in" />
      <TouchableOpacity
        onPress={() => {
          props.show(true);
        }}
      >
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

        <Image
          source={require("../assets/googleAcc.png")}
          style={{ width: 30, height: 30,  }}
        />
      </View>
    </View>
  );
};

const SignIn = (props) => {
  return (
    <View>
      <Input name="user" title="Enter user name" />
      <Input name="mail" title="Enter your email" />
      <Input name="lock" title="Enter password" />
      <Input name="lock" title="Enter password again" />
      <LogButton title="sign up" onPress={() => props.show(false)} />
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
        style={styles.textInput}
        placeholder={props.title}
        placeholderTextColor="black"
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
    width: "100%",
    fontSize: 18,
  },
  text: {
    fontSize: 14,
    fontFamily: "SpartanBold",
    marginHorizontal: 15,
  },
});
export default LogScreen;
