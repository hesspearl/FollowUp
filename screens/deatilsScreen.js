import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { useFirestore, isLoaded } from "react-redux-firebase";
import colors from "../colors";
import TitleText from "../components/customComp/titleText";
import CircleButton from "../components/customComp/CircleButton";

import {
  ImportantLabels,
  NecessaryLabels,
} from "../components/screen Components/Labels";

const DetailsScreen = (props) => {
  const firestore = useFirestore();
  const { data, id, refTo } = props;

 
 console.log(data.productName)
 

  const edit = () => {
    refTo.current.snapTo(2);
    props.navigation.navigate("Edit", { dataId: data, id: id });
  };

  const deleteCard = () => {
    firestore.delete(`Cards/${id}`);
    refTo.current.snapTo(2);
  };

  return (
    <View style={styles.container}>
  
      <View style={{ ...styles.content, marginTop: 20 }}>
        <CircleButton
          onPress={deleteCard}
          img={{ width: 40, height: 40 }}
          style={styles.icons}
          src={{
            uri:
              "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f1c4ea246e9df0461740000/827eaeb69a6d09069231ac25c8021a30/lixo.png",
          }}
        />
        <View style={{elevation:10 }}>
           <Image style={styles.image} source={{ uri: data.application.avatar }} />
        </View>
        
        <CircleButton
          onPress={edit}
          img={{ width: 40, height: 40 }}
          style={styles.icons}
            
          src={{
            uri:
              "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f1c4ea246e9df0461740000/1812944bc0f48c288cee3b58267b9fac/correcao.png",
          }}
        />
      </View>

      <View style={styles.imageContainer}>
       
        <Text
        numberOfLines={1} ellipsizeMode='tail'
         style={{ ...styles.title, fontSize: 35 , fontFamily:"SpartanBold"}}>
          {data.productName}
        </Text>
        <Text style={{...styles.title, marginBottom:20, fontSize:20}}> {data.spend}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.rowContain}>
          <ImportantLabels type={data.important.value} />
          <NecessaryLabels type={data.necessary.value} />
        </View>


        
        <View style={styles.content}>
        <View style={{flexDirection:"column", width:"40%"}}>
           <View >
            <TitleText title="Date" />
            <Text style={styles.title}> {data.date}</Text>
          </View>
          <View>
            <TitleText title="Application" />
            <Text style={styles.title}> {data.application.value}</Text>
          </View>
        </View>
      
         

        <View style={{flexDirection:"column", width:"40%"}}>
         
          
          <View>
            <TitleText title="Attachment" />
            <Text style={styles.note}>add an attachment </Text>
          </View>

          <View style={{marginBottom:20}}>
          <TitleText title="Observation" />
      
            
            {data.observation.length === 0 ? (
              <Text style={styles.note}>add an observation </Text>
            ) : (
              <Text style={{ ...styles.title, width: 200 }}>
                {" "}
                {data.observation}
              </Text>
            )}
         
            
          </View>
        </View>
        </View>
      </View>
      
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    //height: "80%",
    width: "100%",
    backgroundColor: colors.bottomSheet,
    //marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Spartan",
    fontSize: 15,
   // marginVertical:5
  },
  imageContainer: {
    width: "90%",
    // height: "50%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    // padding:10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    margin:10
  },

  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: 20,
  },

  rowContain: {
    flexDirection: "row",
    width: "100%",
    // height: "20%",
    alignItems: "flex-end",
    //margin:10,

    paddingBottom: 20,
    justifyContent: "space-between",
  },
  note: {
    fontFamily: "Spartan",
    fontSize: 15,
    width: 300,
    color: colors.editable,
    // marginVertical:5,
     
   
  },

  icons:{ width: 55,
     height: 55, 
     backgroundColor: colors.icons , 
     borderWidth:0 }
});
export default DetailsScreen;
