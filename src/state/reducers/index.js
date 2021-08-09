import { combineReducers } from "redux";
import rsvpReducer from "./rsvpReducer";

const reducers = combineReducers({
  count: rsvpReducer,
});

export default reducers;
