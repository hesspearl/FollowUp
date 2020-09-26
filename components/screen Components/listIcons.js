import React, { useRef , useState , useEffect} from "react";
import { View,TouchableOpacity,  StyleSheet, FlatList } from "react-native";
import Tooltip from "../customComp/tooltip";
import colors from "../../colors"
import {important, months} from "../../modals/itemsArray";
import * as actions from "../../store/actions/filter"
import {useDispatch} from "react-redux"


const ListIcons = (props) => {
  const { index,title, filter ,setFilter , color } = props;
  const [pressed, setPressed] = useState(false)
  const [colors, setColor] = useState(color)
  
const dispatch = useDispatch()
  

  const ref = useRef();

  useEffect(() => {
    if (!filter&&colors==="black")
    {setColor("white"), setPressed(false)}
  }, [filter])

  const longPressHandler = () => {
    ref.current.toggleTooltip();
  };

  //return selected category array
  
  const onPress= (index, title)=>{ 
  

    switch(title){
      case "importance":
        setPressed(!pressed)
        if(!pressed){
          
          setColor("black")
          return setFilter({array:important,type:"importance"})
        
        }else{ 
          setColor("white")
          dispatch(actions.deleteFilter())
          return setFilter(undefined)}

        case "monthly":
            setFilter(undefined) 
            dispatch(actions.deleteFilter())
           if(filter)
      
            return  setColor("blue")
          
          
    }


    return 
  }

  
  return (
    
   <View style={{ alignItems: "center"  , flexDirection:"column"  }}
    > 
      <Tooltip forwardRef={ref} tip={title}  > 
         <TouchableOpacity 
        onPress={()=>onPress(index, title)}
       onLongPress={longPressHandler}
      >
         {props.children}
      
        </TouchableOpacity> 
       </Tooltip> 
       <View
        style={{
           ...styles.selected,
         backgroundColor:colors }} /> 
</View>

  );
};

const styles = StyleSheet.create({
  selected: {
    width: 60,
    height: 10,

    marginTop: 5,
  },
});
export default ListIcons;
