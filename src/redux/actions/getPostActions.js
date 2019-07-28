import { GET_POST } from "../constants";

export const fetchDataSuccess = value => {
  return {
    type: GET_POST,
    payload: value
  };
};

export const getPostData = value => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + value)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchDataSuccess(res));
      });
  };
};
