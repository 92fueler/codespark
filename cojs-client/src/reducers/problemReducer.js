import {
  PROBLEM_LIST_REQUEST,
  PROBLEM_LIST_SUCCESS,
  PROBLEM_LIST_FAIL,
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
