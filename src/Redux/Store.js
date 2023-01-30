import { combineReducers, createStore } from "redux";
import { expenseReducer } from "./Reducers";

const reducers = combineReducers({expenseList:expenseReducer})

const store = createStore(reducers)

export default store;