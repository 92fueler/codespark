import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  problemListReducer,
  problemDetailsReducer,
  problemDeleteReducer,
  problemCreateReducer,
  problemUpdateReducer,
} from "./reducers/problemReducer";
import {
  userSigninReducer,
  userSignupReducer,
  userUpdateProfileReducer,
  userDetailsReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  problemList: problemListReducer,
  problemDetails: problemDetailsReducer,
  problemDelete: problemDeleteReducer,
  problemCreate: problemCreateReducer,
  problemUpdate: problemUpdateReducer,
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
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
