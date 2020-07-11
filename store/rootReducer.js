import{createStore ,combineReducers , compose} from "redux"
import Format from "./reduces/format"

const rootReducers= combineReducers({
 format:Format,
  })

 export const store = createStore(rootReducers)