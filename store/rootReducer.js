import{createStore ,combineReducers , applyMiddleware} from "redux"
import Format from "./reduces/format"
import firebase from "../firebase"
  import { createFirestoreInstance, firestoreReducer }
   from 'redux-firestore' 
   import { composeWithDevTools } from 'redux-devtools-extension';
import filter from "./reduces/filter";

   const rrfConfig = {
    userProfile: 'users',
     useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

const rootReducers= combineReducers({
 format:Format,
 filter:filter,
 fireStore:firestoreReducer
  })

 

 export const store = createStore(rootReducers, composeWithDevTools())

 export const rrfProps = {
    firebase,
    config: rrfConfig,
   
    createFirestoreInstance // <- needed if using firestore
  }