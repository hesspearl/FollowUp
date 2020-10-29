import React ,{useEffect,useState} from 'react'
import { View, Modal, StyleSheet, BackHandler } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import {list} from "../../modals/itemsArray"

const ModalComp= props =>{



return (
<View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            //  transparent={true}
            visible={props.visible}
            onRequestClose={props.onRequestClose}
           
           >
            {list.map((l, i) => (
              <ListItem
                key={i.toString()}
                
                onPress={()=>props.onPress(l)}
                bottomDivider
              >
                <Avatar  size="medium" source={{uri: l.avatar }}/>
                <ListItem.Content>
                  <ListItem.Title style={styles.title}>{l.label}</ListItem.Title>
                </ListItem.Content>
              </ListItem>

            ))} 
          </Modal>
        </View>
)
}

const styles= StyleSheet.create({
    modalContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    title:{
      fontSize:25,
      fontWeight:"bold"
    },
    img:{
      
    }
})
export default ModalComp;

// leftAvatar={{
//   size: "medium",
//   rounded: false,
//   source: { },
// }}
// title={l.label}
// titleStyle={{ fontSize: 30, fontWeight: "bold" }}