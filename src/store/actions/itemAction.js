import { SET_ITEMS } from "../types";


export const setItems = data => {
  return {
    type: SET_ITEMS,
    payload: data
  }
}
