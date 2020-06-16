import {v4 as uuidv4} from "uuid";

import { SET_ITEMS, ADD_COLUMN } from "../types";

const initialState = {
  items: {
    // Column1: [
    //   {
    //     "id": "166b55f8-84eb-4a9f-9930-855dda68d016",
    //     "index": 0,
    //     "title": "item1 column1",
    //     "description": "description item1 column1 ",
    //     "status": "Column1",
    //   },
    //   {
    //     "id": "266b55f8-84eb-4a9f-9930-855dda68d016",
    //     "index": 1,
    //     "title": "item2 column1",
    //     "description": "description item2 column1",
    //     "status": "Column1",
    //   }
    // ],
    // Column2: [
    //   {
    //     "id": "366b55f8-84eb-4a9f-9930-855dda68d016",
    //     "index": 0,
    //     "title": "item1 column2",
    //     "description": "description item1 column2",
    //     "status": "Column2",
    //   },
    //   {
    //     "id": "466b55f8-84eb-4a9f-9930-855dda68d016",
    //     "index": 1,
    //     "title": "item2 column2",
    //     "description": "description item2 column2",
    //     "status": "Column2",
    //   }
    // ],
    // Column3: [
    //   {
    //     "id": "566b55f8-84eb-4a9f-9930-855dda68d016",
    //     "index": 0,
    //     "title": "item1 column3",
    //     "description": "description item1 column3",
    //     "status": "Column3",
    //   },
    //   {
    //     "id": "666b55f8-84eb-4a9f-9930-855dda68d016",
    //     "index": 1,
    //     "title": "item2 column3",
    //     "description": "description item2 column3",
    //     "status": "Column3",
    //   }
    // ]
  },
  columnCounter: 0,
  itemCounter: {}
};


export const itemReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case ADD_COLUMN: {
      state.columnCounter++;
      return {
        ...state,
        items: {
          ...state.items,
          [`Column${state.columnCounter}`]: []
        }
      }
    }
    case SET_ITEMS: {
      if(state.itemCounter[action.payload.column])
      {
        state.itemCounter[action.payload.column] += 1;
      } else {
        state.itemCounter[action.payload.column] = 0;
      }
      console.log(state.itemCounter)
      const newItem = {
        "id": uuidv4(),
        "index": state.itemCounter[action.payload.column],
        "title": action.payload.title,
        "description": action.payload.content,
        "status": action.payload.column
      }
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.column]: [
            ...state.items[action.payload.column], 
            newItem
          ]
        }
      }
    }
    default:
      return state;
  }
};
