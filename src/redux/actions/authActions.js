import { IS_TOKEN_EXIST } from "../constants";

export const ifExsistToken = value => {
  return {
    type: IS_TOKEN_EXIST,
    payload: value
  };
};