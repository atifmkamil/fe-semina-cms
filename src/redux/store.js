import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import notifReducer from "./notif/reducer";
import categoriesReducer from "./categories/reducer";
import talentsReducer from "./talents/reducer";
import paymentsReducer from "./payments/reducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  notif: notifReducer,
  categories: categoriesReducer,
  talents: talentsReducer,
  payments: paymentsReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk)),
);

export default store;
