import React from "react";
import { View, FlatList, StyleSheet, Text,TouchableOpacity } from "react-native";
import Card from "../components/Card";
import colors from "../colors"

const ListScreen = (props) => {
  const data = [
    {
      product: "burger",
      type: "Food",
      date:"01/07/2020",
      price:"$2,00",
      important:{
        type:"average",
        color:"yellow"
      },
      necessary:{
        type:"Necessary",
        color:"green",

      },
      observation:"I bought it when i was on school, also because I couldn’t get my snack at home",
      picture:
        "https://images.deliveryhero.io/image/talabat/MenuItems/CC3-copy_635755782090422946.jpg",
    },
    // {
    //     product: "shoes",
    //     type: "clothes",
    //     picture:
    //       "https://lh3.googleusercontent.com/proxy/wW7PzQkIWsmS-GvCDXr2-NBuoaseYKLAjM8pBeDhMTNw7PhNETDoDNhPo1odIdK-N0XNazEByWYO-ylTwtgnS1as6khahyDAZEZkha09Q1rgg8Zmcr-XP6UU_ybH2w4Y",
    //   },
  ];
  return (
      <View style={styles.container}>
    
      <FlatList
      style={{flex:1}}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => (
            <TouchableOpacity onPress={()=>props.navigation.navigate(
              "details"
            ,{data:itemData.item})}>
          <Card
            product={itemData.item.product}
            type={itemData.item.type}
            picture={itemData.item.picture}
          />
          </TouchableOpacity>
        )}
      />
    
    <View style={styles.fab}>
      <Text style={{fontSize:100 , fontFamily: "Piedra",}}>
        +
      </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
        marginTop:20
    },
    fab:{
      width:100 ,
      height:100, 
      borderRadius:100,
    position:"absolute",
    bottom:10,
    right:10,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.fab
  }
});
export default ListScreen;
