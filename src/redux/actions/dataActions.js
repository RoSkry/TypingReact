import { DATA_SUCCESS } from "../constants";


export const fetchDataSuccess = value => {
  return {
    type: DATA_SUCCESS,
    payload: value
  };
};

export const fetchData = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {
        dispatch(fetchDataSuccess(res));
      });
  };
};