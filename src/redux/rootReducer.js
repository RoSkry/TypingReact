import { combineReducers } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { authReducer } from "./reducers/authReducer";
import { postReducer } from "./reducers/postReducer";

export const rootReducer = combineReducers({
  profileReducer,
  authReducer,
  postReducer
});
