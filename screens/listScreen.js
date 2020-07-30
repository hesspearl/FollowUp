import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import colors from "../colors";
import{useSelector}from "react-redux"
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


const todosQuery = {
  collection: 'Cards',
  queryParams: [ 'orderByChild=createdAt' ]
}
const ListScreen = (props) => {
  useFirestoreConnect(() => [todosQuery])

  const cards =  useSelector(({ fireStore: { ordered } }) =>
   ordered.Cards)




  return (
    <View style={styles.container}>
    
      <FlatList
        style={{ flex: 1 }}
        data={cards}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("details", { data: itemData.item.format , id:itemData.item.id})
            }
          >
            <Card
              product={itemData.item.format.productName}
              picture={itemData.item.format.application.avatar}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.fab}>
        <TouchableOpacity onPress={() => props.navigation.navigate("body01")}>
          <Text style={{ fontSize: 100, fontFamily: "Piedra" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 20,
  },
  fab: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.fab,
  },
});
export default ListScreen;
