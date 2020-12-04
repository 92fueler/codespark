import {
  PROBLEM_LIST_REQUEST,
  PROBLEM_LIST_SUCCESS,
  PROBLEM_LIST_FAIL,
  PROBLEM_DETAILS_REQUEST,
  PROBLEM_DETAILS_SUCCESS,
  PROBLEM_DETAILS_FAIL,
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
