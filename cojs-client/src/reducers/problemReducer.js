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
  PROBLEM_CREATE_RESET,
  PROBLEM_UPDATE_REQUEST,
  PROBLEM_UPDATE_SUCCESS,
  PROBLEM_UPDATE_FAIL,
  PROBLEM_UPDATE_RESET,
} from "../constants/problemConstants";

export const problemListReducer = (state = { problems: [] }, action) => {
  switch (action.type) {
    case PROBLEM_LIST_REQUEST:
      return { loading: true, problems: [] };
    case PROBLEM_LIST_SUCCESS:
      return { loading: false, problems: action.payload };
    case PROBLEM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const problemDetailsReducer = (state = { problem: {} }, action) => {
  switch (action.type) {
    case PROBLEM_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PROBLEM_DETAILS_SUCCESS:
      return { loading: false, problem: action.payload };
    case PROBLEM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const problemDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROBLEM_DELETE_REQUEST:
      return { loading: true };
    case PROBLEM_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PROBLEM_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const problemCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROBLEM_CREATE_REQUEST:
      return { loading: true };
    case PROBLEM_CREATE_SUCCESS:
      return { loading: false, success: true, problem: action.payload };
    case PROBLEM_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PROBLEM_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const problemUpdateReducer = (state = { problem: {} }, action) => {
  switch (action.type) {
    case PROBLEM_UPDATE_REQUEST:
      return { loading: true };
    case PROBLEM_UPDATE_SUCCESS:
      return { loading: false, success: true, problem: action.payload };
    case PROBLEM_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PROBLEM_UPDATE_RESET:
      return { problem: {} };
    default:
      return state;
  }
};
