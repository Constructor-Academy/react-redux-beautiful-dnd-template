import {ADD_COLUMN} from "../types";

export const addColumn = data => {
    return {
      type: ADD_COLUMN,
      payload: data
    }
  }