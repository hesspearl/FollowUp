import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ScreenNav from "./navigations/screensNavigation"
import colors from './colors';
import{View} from "react-native"
import{AppLoading} from 'expo'
import {store} from "./store/rootReducer"
import {Provider} from "react-redux"
import {Piedra_400Regular ,useFonts} from '@expo-google-fonts/piedra'
export default function App() {

  let [fontLoad]=useFonts({
"Piedra":Piedra_400Regular
  })
  if (!fontLoad) {
    return <AppLoading />;
  }else
 { return (
   <Provider store={store}>
    <View style={{flex:1,   backgroundColor: colors.background,}}>
      <ScreenNav/>
    
      <StatusBar 
      backgroundColor={colors.stateBar}
      style="auto" />
    </View>
    </Provider>
  );}
}
