
import React, {useEffect} from 'react'
import{ ActivityIndicator} from "react-native"
import * as actions from "../../store/actions/filter";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import moment from "moment";

 const LoadingMonth = (props) => {
    const { position, index } = props.route.params;
  
  
   useFirestoreConnect(["Cards"]);
    const cards =  useSelector(({ fireStore: { ordered } }) => ordered.Cards);
  
    
    const dispatch = useDispatch()
  
    let items = [];
  
    useEffect(() => {
      const unsubscribe = props.navigation.addListener("focus", () => {

          console.log("loaded")
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
         
      );

      return unsubscribe

    
    }, [])

    useEffect(() => {
      props.navigation.navigate("list", {position:position, index:index});
    }, [props.navigation])
  
   return <ActivityIndicator  color="red" style={{flex:1, justifyContent:"center", alignItems:"center"}} size="large" />
  };

  export default LoadingMonth 