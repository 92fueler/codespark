import {
  PROBLEM_LIST_REQUEST,
  PROBLEM_LIST_SUCCESS,
  PROBLEM_LIST_FAIL,
} from "../constants/problemConstants";
import axios from "axios";

export const listProblems = () => async (dispatch) => {
  try {
    dispatch({ type: PROBLEM_LIST_REQUEST });
    const { data } = await axios.get("/api/v1/problems");
    dispatch({
      type: PROBLEM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROBLEM_LIST_FAIL,
      // error comes from express server
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
