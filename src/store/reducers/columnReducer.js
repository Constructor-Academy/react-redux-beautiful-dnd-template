import {ADD_COLUMN} from "../types";

const initialState = {
    columns : []
};

export const columnReducer = ( state = initialState, action ) => {
    switch (action.type) {
      case ADD_COLUMN: {
        return {
          ...state,
          columns: [
              ...state.columns,
              action.payload
          ]
        }
      }
      default:
        return state;
    }
  };
