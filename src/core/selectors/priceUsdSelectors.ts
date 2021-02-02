import { PriceUsdState } from "../reducers/priceUsdReducer";
import { RootState } from "../reducers/rootReducer";

const getState = (state: RootState): PriceUsdState => state?.priceUsd;

export const getPriceUsdData = (state: RootState) =>
  getState(state)?.priceUsdData;
