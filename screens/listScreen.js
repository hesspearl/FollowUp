import React, { useRef, useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Card from "../components/customComp/Card";
import colors from "../colors";
import BottomSheet from "reanimated-bottom-sheet";
import DetailsScreen from "./deatilsScreen";
import ToolTip from "../components/customComp/tooltip";
import ListIcons from "../components/screen Components/listIcons";
import Selectable from "../components/screen Components/Selectable";
import { months, icons } from "../modals/itemsArray";
import { useSelector } from "react-redux";
import { deleteFilter } from "../store/actions/filter";

const ListScreen = (props) => {
  //clicked card data
  const [cardsData, setData] = useState();
  const [positionX, setPositionX] = useState(0);
  //header filter array
  const [filter, setFilter] = useState();
  const [refScroll, setRefScroll] = useState();
  const [showToast, setShowToast] = useState({value:false, title:""});

  const filterState = useSelector((state) => state.filter);

  const ref = useRef();
  const refTool = useRef();



  const pressed = (item) => {
    ref.current.snapTo(1);
    //item that got pressed data
    setData({
      data: item.format,
      id: item.id,
    });
  };

  //bottomSheet render
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


  // useEffect(() => {
  //   if (filter) {
  //     setFlatListData(filterState.filter.data);
  //   }
  //   if (filterState.multiFilter.name) {
  //     setFlatListData(filterState.multiFilter.data);
  //   } 
  //    {
  //     setFlatListData(filterState.months);
  //   }
  // }, [filterState, filter]);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
          ref={(ref) => setRefScroll(ref)}
          contentContainerStyle={{
            width: filter ? "100%" : null,
            justifyContent: "center",
          }}
          onScroll={(event) => {
            if (!filter) setPositionX(event.nativeEvent.contentOffset.x);
          }}
        >
          <Selectable
            filter={filter}
            array={months}
            navigation={props.navigation}
          />
        </ScrollView>
      </View>
      {/* <View style={{ ...styles.iconsContainer, marginBottom: 15 }}>
        {icons.map((item, index) => (
          <View key={index}>*/}
            <ListIcons
              refScroll={refScroll}
              filterItem={setFilter}
             showToast={setShowToast}
            />
           
       {/*   </View>
        ))}
      </View> */}
      <FlatList
        style={{ flex: 1 }}
        data={filter ? filterState.filter.data : filterState.months}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <>
            <TouchableOpacity
              onPress={
                () => pressed(itemData.item)

                //props.navigation.navigate("details", { , })
              }
              onLongPress={() => refTool.current.toggleTooltip()}
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
      <ToolTip />
      {showToast.value&&<View style={styles.toast}>
        <Text style={styles.title}> {showToast.title} </Text>
      </View>}
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
  iconsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "10%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  toast:{
  position:"absolute",
  right:150,
  bottom:20,
  width:"40%", 
  height:50, 
  backgroundColor:"grey",
borderRadius:40,
opacity:5,
justifyContent:"center",
alignItems:"center"},
title: {
  fontFamily: "SpartanBold",
  fontSize: 20,
  //color:"white"
},
});
export default ListScreen;
