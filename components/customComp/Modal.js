import React from 'react'
import { View, Modal, StyleSheet } from 'react-native';
import { ListItem } from "react-native-elements";

const ModalComp= props =>{
    const list = [
        {
          label: "beauty",
          value: "beauty",
          avatar:
            "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/d851018c9eb1ef46ea5b96b72500b553/beauty.PNG",
        },
        {
          label: "clothes",
          value: "clothes",
          avatar:
            "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/cbf4201711d43f539d2329690f6dfc64/clothes.PNG",
        },
        {
          label: "food",
          value: "food",
          avatar:
            "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/3795d64d953a7fd614799f0c005ffa38/food.PNG",
        },
        {
          label: "health",
          value: "health",
          avatar:
            "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/853a0dbcd16955f700ff8000814e65fc/health.PNG",
        },
        {
          label: "pets",
          value: "pets",
          avatar:
            "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/6424fdb7ce7859c6d6db5d2343ca737f/pet.png",
        },
        {
          label: "games",
          value: "games",
          avatar:
            "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/c5100bdd6697525011a02e8cd6a6766f/game.PNG",
        },
        {
          label: "essentials",
          value: "essentials",
          avatar:
            "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/413fe0062708bdd3cec55a6dd053e43a/alimentation_-_supermarket.PNG",
        },
        {
          label: "education",
          value: "education",
          avatar:
            "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/2a3f1df4d53ac9c7950eb3d23434a2f7/Education.PNG",
        },
        {
          label: "others(observation)",
          value: "others(observation)",
          avatar:
            "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/f82234345b15940f97eebef361f10dc1/others.PNG",
        },
      ];
return (
<View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            //  transparent={true}
            visible={props.visible}
            
          >
            {list.map((l, i) => (
              <ListItem
                key={i.toString()}
                leftAvatar={{
                  size: "medium",
                  rounded: false,
                  source: { uri: l.avatar },
                }}
                title={l.label}
                titleStyle={{ fontSize: 30, fontWeight: "bold" }}
                onPress={()=>props.onPress(l)}
                bottomDivider
              />
            ))} 
          </Modal>
        </View>
)
}

const styles= StyleSheet.create({
    modalContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
})
export default ModalComp;