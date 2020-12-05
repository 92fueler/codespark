import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  problemListReducer,
  problemDetailsReducer,
} from "./reducers/problemReducer";
import { userSigninReducer, userSignupReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  problemList: problemListReducer,
  problemDetails: problemDetailsReducer,
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userSignin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
