import { StatusBar } from "expo-status-bar";
import React from "react";
import AppNav from "./navigations/navigationContainer";
import colors from "./colors";
import { View } from "react-native";
import { AppLoading } from "expo";
import { store, rrfProps } from "./store/rootReducer";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { Provider } from "react-redux";
import { Piedra_400Regular, useFonts } from "@expo-google-fonts/piedra";
import {
  Spartan_400Regular,
  Spartan_700Bold,
} from "@expo-google-fonts/spartan";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider as ProviderPaper } from "react-native-paper";
import size from "./size";
import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

console.ignoredYellowBox = ["Warning:"];

export default function App() {
  let [fontLoad] = useFonts({
    Piedra: Piedra_400Regular,
    Spartan: Spartan_400Regular,
    SpartanBold: Spartan_700Bold,
  });


  if (!fontLoad) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider dispatch={store.dispatch} {...rrfProps}>
       
          <StatusBar/>
            <AppNav />
          
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}
