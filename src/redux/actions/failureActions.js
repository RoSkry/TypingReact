import { ON_FAILURE } from "../constants";

export const saveErrorStoreAction = value => {
  return {
    type: ON_FAILURE,
    payload: value
  };
};
