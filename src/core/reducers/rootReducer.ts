import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import isLoadingReducer from "./isLoadingReducer";
import errorReducer from "./errorReducer";
import hashRateReducer from "./hashRateReducer";
import difficultyReducer from "./difficultyReducer";
import priceUsdReducer from "./priceUsdReducer";

export const history = createBrowserHistory();

export let rootReducer = combineReducers({
  router: connectRouter(history),
  loading: isLoadingReducer,
  error: errorReducer,
  difficulty: difficultyReducer,
  hashRate: hashRateReducer,
  priceUsd: priceUsdReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
