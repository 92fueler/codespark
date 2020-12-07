import {
  PROBLEM_LIST_REQUEST,
  PROBLEM_LIST_SUCCESS,
  PROBLEM_LIST_FAIL,
  PROBLEM_DETAILS_REQUEST,
  PROBLEM_DETAILS_SUCCESS,
  PROBLEM_DETAILS_FAIL,
  PROBLEM_DELETE_REQUEST,
  PROBLEM_DELETE_SUCCESS,
  PROBLEM_DELETE_FAIL,
  PROBLEM_CREATE_REQUEST,
  PROBLEM_CREATE_SUCCESS,
  PROBLEM_CREATE_FAIL,
  PROBLEM_UPDATE_REQUEST,
  PROBLEM_UPDATE_SUCCESS,
  PROBLEM_UPDATE_FAIL,
} from "../constants/problemConstants";
import axios from "axios";
import { signout } from "./userAction";

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

export const listProblemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROBLEM_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/problems//${id}`);
    dispatch({
      type: PROBLEM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROBLEM_DETAILS_FAIL,
      // error comes from express server
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProblem = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROBLEM_DELETE_REQUEST,
    });

    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/v1/problems/${id}`, config);

    dispatch({
      type: PROBLEM_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(signout());
    }
    dispatch({
      type: PROBLEM_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createProblem = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROBLEM_CREATE_REQUEST,
    });

    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/v1/problems`, {}, config);

    dispatch({
      type: PROBLEM_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(signout());
    }
    dispatch({
      type: PROBLEM_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateProblem = (problem) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROBLEM_UPDATE_REQUEST,
    });

    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/v1/problems/${problem.id}`,
      problem,
      config
    );

    dispatch({
      type: PROBLEM_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: PROBLEM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(signout());
    }
    dispatch({
      type: PROBLEM_UPDATE_FAIL,
      payload: message,
    });
  }
};
