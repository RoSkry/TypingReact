import { ON_SUCCESS } from "../constants";

export const saveToStoreAction = value => {
  return {
    type: ON_SUCCESS,
    payload: value
  };
};
