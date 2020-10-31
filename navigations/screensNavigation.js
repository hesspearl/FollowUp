import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import body01 from "../screens/body01";
import list from "../screens/listScreen";
import details from "../screens/deatilsScreen";
import start from "../screens/startScreen"
import LoadingScreen  from "../screens/loadingScreen"
import LoadingMonth from "../components/functional components/LoadingMonth"
import editScreen from "../screens/editScreen"
import updating from "../components/functional components/updateScreen"
const screenNavigator = (props) => {
  
  const BodyStack = createStackNavigator();
  return (
    <NavigationContainer>
      <BodyStack.Navigator screenOptions={{ header: () => null}} >
      <BodyStack.Screen name="start" component={start}  />
        <BodyStack.Screen name="list" component={list}  />
        <BodyStack.Screen name="details" component={details}  />
        <BodyStack.Screen name="body01" component={body01}  />
        <BodyStack.Screen name="loading" component={LoadingScreen}  />
        <BodyStack.Screen name="loadingMonth" component={LoadingMonth}  />
        <BodyStack.Screen name="updating" component={updating}  />
        <BodyStack.Screen name="Edit" component={editScreen} />
      </BodyStack.Navigator>
    </NavigationContainer>
  );
};

export default screenNavigator;
