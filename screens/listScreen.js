import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Card from "../components/customComp/Card";
import colors from "../colors";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import BottomSheet from "reanimated-bottom-sheet";
import DetailsScreen from "./deatilsScreen";
import ToolTip from "../components/customComp/tooltip"

const todosQuery = {
  collection: "Cards",
  queryParams: ["orderByChild=createdAt"],
};
const ListScreen = (props) => {
  const [cardsData, setData] = useState();
  useFirestoreConnect(() => [todosQuery]);

  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);

  const ref = useRef();
  const refTool = useRef()
  const pressed = (item) => {
    ref.current.snapTo(1);

    setData({
      data: item.format,
      id: item.id,
    });
  };

  const renderInner = () => {
    {
      if (cardsData)
        return (
          <DetailsScreen
            data={cardsData.data}
            id={cardsData.id}
            refTo={ref}
            navigation={props.navigation}
          />
        );
    }

    return <View />;
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={cards}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <>
      
          <TouchableOpacity
            onPress={
              () => pressed(itemData.item)

              //props.navigation.navigate("details", { , })
            }
            onLongPress={()=>refTool.current.toggleTooltip()}
          >
            <Card
              product={itemData.item.format.productName}
              picture={itemData.item.format.application.avatar}
            />
          </TouchableOpacity>
          <ToolTip
      forwardRef={refTool}
      tip={itemData.item.format.productName}
      />
          </>
        )}
      />
      <ToolTip/>
      <BottomSheet
        ref={ref}
        snapPoints={[500, 350, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={2}
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
  header: {
    backgroundColor: colors.bottomSheet,
    shadowColor: "#000000",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
});
export default ListScreen;
