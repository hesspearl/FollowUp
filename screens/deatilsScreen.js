import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { useFirestore , isLoaded} from "react-redux-firebase";
import Fab from "../components/FAB";
import colors from "../colors";

const DetailsScreen = (props) => {
  const firestore = useFirestore();
  const { data, id } = props.route.params;

  const card = useSelector(
    ({ fireStore: { data } }) => data.Cards && data.Cards[id]
  );

console.log(id)

  function toggleDone() {
    firestore.update(`Cards/${id}`, { done: card.one });
  }

  const deleteCard=()=> {
     firestore.delete(`Cards/${id}`);
    props.navigation.goBack()
  }
  return (
    <View style={styles.container}>
    <Text style={{ ...styles.title, fontSize: 60,  }}>
          {" "}
          {data.productName}
        </Text>
      <View style={{position:"absolute" , top:50, right:30}}>
        
        <Fab
        delete={deleteCard} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: data.application.avatar }} />
      </View>
      <Text style={styles.title}> {data.application.value}</Text>
      <Text style={styles.title}> {data.date}</Text>
      <Text style={styles.title}> {data.spend}</Text>

      <View style={styles.rowContain}>
        <View style={styles.background}>
          <View
            style={{
              ...styles.colorCircle,
              backgroundColor: data.important.color,
            }}
          />
          <Text style={styles.textInside}>{data.important.value}</Text>
        </View>
        <View style={styles.background}>
          <Text style={styles.textInside}>{data.necessary.value}</Text>
          <View
            style={{
              ...styles.colorCircle,
              backgroundColor: data.necessary.color,
            }}
          />
        </View>
      </View>

      <View style={styles.textbox}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          {data.observation}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Piedra",
    fontSize: 40,
    margin: 5,
  },
  imageContainer: {
    width: "80%",
    height: "24%",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  rowContain: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  background: {
    flexDirection: "row",
    borderRadius: 50,

    backgroundColor: colors.textBack,
    padding: 10,
    width: "40%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  colorCircle: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  textbox: {
    backgroundColor: colors.textBack,
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
  textInside: {
    fontSize: 27,
    fontFamily: "Piedra",
  },
});
export default DetailsScreen;
