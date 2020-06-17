import { combineReducers } from "redux";
import { itemReducer } from "./itemReducer";
import {columnReducer} from "./columnReducer";

export const reducers = combineReducers({
  itemReducer,
  columnReducer
});
