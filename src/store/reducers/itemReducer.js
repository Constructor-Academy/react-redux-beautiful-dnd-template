import { SET_ITEMS } from "../types";

const initialState = {
  items: {
    Column1: [
      {
        "id": "166b55f8-84eb-4a9f-9930-855dda68d016",
        "index": 0,
        "title": "item1 column1",
        "description": "description item1 column1 ",
        "status": "Column1",
      },
      {
        "id": "266b55f8-84eb-4a9f-9930-855dda68d016",
        "index": 1,
        "title": "item2 column1",
        "description": "description item2 column1",
        "status": "Column1",
      }
    ],
    Column2: [
      {
        "id": "366b55f8-84eb-4a9f-9930-855dda68d016",
        "index": 0,
        "title": "item1 column2",
        "description": "description item1 column2",
        "status": "Column2",
      },
      {
        "id": "466b55f8-84eb-4a9f-9930-855dda68d016",
        "index": 1,
        "title": "item2 column2",
        "description": "description item2 column2",
        "status": "Column2",
      }
    ],
    Column3: [
      {
        "id": "566b55f8-84eb-4a9f-9930-855dda68d016",
        "index": 0,
        "title": "item1 column3",
        "description": "description item1 column3",
        "status": "Column3",
      },
      {
        "id": "666b55f8-84eb-4a9f-9930-855dda68d016",
        "index": 1,
        "title": "item2 column3",
        "description": "description item2 column3",
        "status": "Column3",
      }
    ]
  }
};


export const itemReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SET_ITEMS: {
      return {
        ...state,
        items: action.payload
      }
    }
    default:
      return state;
  }
};
