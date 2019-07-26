import { ON_SUCCESS } from "../constants";
import { ON_FAILURE } from "../constants";
import { IS_TOKEN_EXIST } from "../constants";

const initialState = {
  profObj: {
    givenName: "Rost",
    familyName: "Skrypnyk",
    email: "some@mail"
  },
  error: ""
};

export const profileReducer = (state = initialState, action) => {
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
