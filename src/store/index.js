import { combineReducers, createStore, applyMiddleware } from "redux";
import counterReducer from "../reducers/reducer.counter";
// import logger from "redux-logger";

const rootReducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(logger)
);

export default store;
