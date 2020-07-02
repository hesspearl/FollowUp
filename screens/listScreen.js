import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import colors from "../colors"

const ListScreen = (props) => {
  const data = [
    {
      product: "burger",
      type: "Food",
      picture:
        "https://images.deliveryhero.io/image/talabat/MenuItems/CC3-copy_635755782090422946.jpg",
    },
    {
        product: "shoes",
        type: "clothes",
        picture:
          "https://lh3.googleusercontent.com/proxy/wW7PzQkIWsmS-GvCDXr2-NBuoaseYKLAjM8pBeDhMTNw7PhNETDoDNhPo1odIdK-N0XNazEByWYO-ylTwtgnS1as6khahyDAZEZkha09Q1rgg8Zmcr-XP6UU_ybH2w4Y",
      },
  ];
  return (
      <View style={styles.container}>
    
      <FlatList
      style={{flex:1}}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={(itemData) => (
            <TouchableOpacity>
          <Card
            product={itemData.item.product}
            type={itemData.item.type}
            picture={itemData.item.picture}
          />
          </TouchableOpacity>
        )}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
        marginVertical:20
    }
});
export default ListScreen;
