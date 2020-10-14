import React, { useRef, useState, useEffect, useCallback } from "react";
import { View, Pressable, StyleSheet, Text, Modal } from "react-native";
import Tooltip from "../customComp/tooltip";
import colors from "../../colors";
import { important, necessary, icons } from "../../modals/itemsArray";
import * as actions from "../../store/actions/filter";
import { useDispatch } from "react-redux";
import { color } from "react-native-reanimated";

const ListIcons = (props) => {
  const { filterItem, refScroll, showToast } = props;
  const [pressed, setPressed] = useState(false);
  const [colors, setColor] = useState();
  const [filter, setFilter] = useState();


  const dispatch = useDispatch();

  // rest color and pressed to default
  // when no filter is selected
  useEffect(() => {
    if (!filter && colors == "black") {
      setColor("white"), setPressed(false);
    }

    filterItem(filter);
  }, [filter]);

  //filtering function
  const filtering = (arr, type, i) => {
    console.log(pressed)
    setPressed(true);
   // if (pressed) {
      refScroll.scrollTo({ x: 0 });
      setColor({ color: "black", index: i });

      //array is from items array component
      //type the type of selected button
      return setFilter({ array: arr, type: type });
  //  } 
    
    // else if (!pressed) {
    //   setColor("white");
    //   dispatch(actions.deleteFilter());
    //   return 
    //   //setFilter(undefined);
    // }
  };

  //return selected category array

  const onPress = (index, title) => {
    switch (title) {
      case "importance":
        filtering(important, "importance", index);

        break;

      case "necessary":
        filtering(necessary, "necessary", index);

        break;

      case "monthly":
        setFilter(undefined);
        dispatch(actions.deleteFilter());
        if (filter) return setColor("blue");

        break;
    }

    return;
  };
  


  

  return (
    <View style={{ ...styles.iconsContainer, marginBottom: 15 }}>
      {icons.map((item, index) => (
        <View key={index}>
          <View style={{ alignItems: "center", flexDirection: "column" }}>
          <Tooltip tip={item.title}>
            <Pressable onPress={() => onPress(index, item.title)}
            onLongPress={()=>showToast({value:true,title:item.title})}
         //   onPressOut={()=>showToast({value:false,title:""})}
            
             >
              
                {item.icon}
          
            </Pressable>
    </Tooltip>
            <View
              style={{
                ...styles.selected,
                backgroundColor:
                  colors?.index === index ? colors.color : item.color,
              }}
            />

            {/* <ListIcons
              refScroll={refScroll}
              scrollPosition={positionX}
              index={index}
              title={item.title}
              setFilter={setFilter}
              filter={filter}
              color={item.color}
            >
              {item.icon}
            </ListIcons> */}
          </View>
        </View>
      ))}
      
      {/* </View>
      <View style={{ alignItems: "center", flexDirection: "column" }}>
      <Tooltip forwardRef={ref} tip={title}>
        <TouchableOpacity
     
          onPress={() => onPress(index, title)}
          onLongPress={longPressHandler}
        >
          {props.children}
        </TouchableOpacity>
      </Tooltip>
      <View
        style={{
          ...styles.selected,
          backgroundColor:colors,
        }}
      />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    width: 60,
    height: 10,

    marginTop: 5,
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
});
export default ListIcons;
