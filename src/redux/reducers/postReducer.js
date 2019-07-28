import { DATA_SUCCESS } from "../constants";
import { GET_POST } from "../constants";

const initialState = {
  value: [],
  postValue: {}
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_SUCCESS:
      return {
        ...state,
        value: action.payload
      };
    case GET_POST:
      return {
        ...state,
        postValue: action.payload
      };
    default:
      return state;
  }
};
