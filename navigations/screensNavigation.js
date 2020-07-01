import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import body01 from "../screens/body01"
import body02 from "../screens/body02"



const screenNavigator = props=>{

    const BodyStack=createStackNavigator()
        return(
        <NavigationContainer>
        <BodyStack.Navigator screenOptions={{header:()=>null}}>
            <BodyStack.Screen name="body01" component={body01} />
            <BodyStack.Screen name="body02" component={body02}/>
        </BodyStack.Navigator>
        </NavigationContainer>
        )
     }
     
    
     export default screenNavigator;