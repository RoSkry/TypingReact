import { ON_SUCCESS } from "../constants";
import { ON_FAILURE } from "../constants";

const initialState = {
  profObj: {},
  error: ""
};

export const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SUCCESS:
      return {
        ...state,
        profObj: action.payload
      };
    case ON_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
