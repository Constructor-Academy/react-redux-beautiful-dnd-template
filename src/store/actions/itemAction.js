import { SET_ITEMS, UPDATE_ITEMS } from "../types";


export const setItems = data => {
  return {
    type: SET_ITEMS,
    payload: data
  }
}


export const updateItems = data => {
  return {
    type: UPDATE_ITEMS,
    payload: data
  }
}