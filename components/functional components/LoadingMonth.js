
import React, {useEffect} from 'react'
import{ ActivityIndicator} from "react-native"
import * as actions from "../../store/actions/filter";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import moment from "moment";

 const LoadingMonth = (props) => {
   const{navigation}=props
    const { position, index } = props.route.params;
      const { uid } = useSelector((state) => state.firebase.auth);
  
    useFirestoreConnect({
      collection: `users/${uid}/Cards`,
      storeAs: "Cards",
      orderBy:"createdAt",
      
    });
    const cards =  useSelector(({ fireStore: { ordered } }) => ordered.Cards);
//console.log(cards)
  
    const dispatch = useDispatch()
  
  
  
  const findMonth=()=>{
       let items = [];
    for (const card of cards) {
          
      let date = moment(card.format.date, "DD/MM/YYYY", true).format();
 
      if (moment(date).month() === index) {
        if (moment(date).format("DD/MM/YYYY") === card.format.date) {

        
          items.push(card);
        }
      }
    }
  
    dispatch(actions.filterByMonths(items));
   
  }

      useEffect(() => {
        if(cards){

             findMonth()
        navigation.navigate("list", {position:position, index:index});
        }

    }, [navigation, cards])
  
   return <ActivityIndicator  color="red" style={{flex:1, justifyContent:"center", alignItems:"center"}} size="large" />
  };

  export default LoadingMonth 