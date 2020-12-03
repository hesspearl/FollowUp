import React, { useState, useEffect , useCallback } from "react";
import {View} from "react-native"
import Cart from "../assets/cart.svg";
import { useFirestore } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/filter";
import {
  currentMonth,
  findMonth,
} from "../components/functional components/LoadingMonth";

const Loading = (props) => {
  const dispatch = useDispatch();
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);


  const selectCurrentMonth= useCallback(
    () => {
      const cm = currentMonth();
      const items = findMonth(cards, cm.thisMonth);

      dispatch(actions.filterByMonths(items, cm.current, cm.thisMonth));
      props.setDone(false);

  }
   ,[props.done]
  )
  //console.log(props.done)
 

  useEffect(() => {
    if (props.done) {
     selectCurrentMonth()
    }
  }, [props.done])
    


  return (
    <View style={{flex:1 , justifyContent:"center", alignItems:"center"}}>
  <Cart width="250" height="200" />
    </View>
  
  );
};

const LoadingScreen = (props) => {
  const [done, setDone] = useState(null);
  const data = useSelector((state) => state.format);
  const { uid } = useSelector((state) => state.firebase.auth);
  const filterState = useSelector((state) => state.filter);
  
  console.log(done)

  
  const firestore = useFirestore();

  const update = async() => {
    await firestore
      .collection("users")
      .doc(uid)
      .collection("Cards")
      .add({
        ...data,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setDone(true);
      });
  };

  useEffect(() => {

    
    if (done === false &&  ! filterState.currentMonth.position) {
      
      setDone(true)
 
    }

     if (done=== false &&  !! filterState.currentMonth.position) {
      
      setDone(null)
      props.navigation.navigate("list");
    }
    const unsubscribe = props.navigation.addListener("focus", () => {
      update();
    });

    return unsubscribe
  }, [data, firestore, done]);



  return <Loading done={done} setDone={setDone} />;
};

export default LoadingScreen;
