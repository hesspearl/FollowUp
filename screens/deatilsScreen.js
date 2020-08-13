import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useFirestore, isLoaded } from "react-redux-firebase";
import Fab from "../components/screen Components/FAB";
import colors from "../colors";
import ShowMore from "../components/screen Components/showMore";
import Lights from "../components/customComp/lights";

const DetailsScreen = (props) => {
  const firestore = useFirestore();
  const { data, id } = props.route.params;

  const card = useSelector(
    ({ fireStore: { data } }) => data.Cards && data.Cards[id]
  );

  //console.log(id);

  function toggleDone() {
    firestore.update(`Cards/${id}`, { done: card.one });
  }

  const deleteCard = () => {
    firestore.delete(`Cards/${id}`);
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={{ ...styles.title, fontSize: 60 }}>
          {data.productName}
        </Text>

        <Image style={styles.image} source={{ uri: data.application.avatar }} />
      </View>

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.titlesContain}>
          <View style={{ position: "absolute", top: 0, right: 20 }}>
            <Fab
              delete={deleteCard}
              nextPage={() =>
                props.navigation.navigate("Edit", { dataId: data })
              }
            />
          </View>
          <Text style={styles.title}> {data.application.value}</Text>
          <Text style={styles.title}> {data.date}</Text>
          <Text style={styles.title}> {data.spend}</Text>
        </View>

        <View style={styles.rowContain}>
          <Lights title="Important level" color={data.important.color}>
            <Text style={styles.textInside}>{data.important.value}</Text>
          </Lights>

          <Lights title="Necessary?" color={data.necessary.color}>
            <Text style={styles.textInside}>{data.necessary.value}</Text>
          </Lights>
        </View>

        <ShowMore observation={data.observation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    //marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Piedra",
    fontSize: 40,
    margin: 15,
  },
  imageContainer: {
    width: "100%",
    // height: "50%",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  rowContain: {
    flexDirection: "column",
    width: "100%",
    // height: "20%",
    alignItems: "flex-end",
    //margin:10,
    borderBottomWidth: 1,
    paddingBottom: 20,
    //  justifyContent:"flex-start",
  },
  background: {
    flexDirection: "row",
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: colors.textBack,
    padding: 10,
    width: "40%",
    alignItems: "center",
    //justifyContent: "space-around",
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
    marginLeft: 20,
  },
  titlesContain: {
    //borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  txtDescribe: {
    fontSize: 30,
    fontFamily: "Piedra",
  },
});
export default DetailsScreen;
