import { combineReducers } from "redux";
import authUser from "./authUser";
import users from "./users";
import questions from "./questions";
import loading from "./loading";

export default combineReducers({
  authUser,
  users,
  questions,
  loading,
});
