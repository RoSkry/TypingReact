import { combineReducers } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { authReducer } from "./reducers/authReducer";

export const rootReducer = combineReducers({
  profileReducer,
  authReducer
});
