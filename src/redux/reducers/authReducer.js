import { IS_TOKEN_EXIST } from "../constants";

const initialState = {
    token:false
 };

 export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case IS_TOKEN_EXIST:
        return {
          ...state,
          token: action.payload
        };
      default:
        return state;
    }
  };