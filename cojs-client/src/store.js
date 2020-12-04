import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  problemListReducer,
  problemDetailsReducer,
} from "./reducers/problemReducer";

const reducer = combineReducers({
  problemList: problemListReducer,
  problemDetails: problemDetailsReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
