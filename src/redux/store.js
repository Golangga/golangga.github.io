import { configureStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extention";
import rootReducer from "./reducers";

const initialState = {};

const applyMiddleware = [thunk];

const store = configureStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...applyMiddleware))
);
