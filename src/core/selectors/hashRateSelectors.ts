import { HashRateState } from "../reducers/hashRateReducer";
import { RootState } from "../reducers/rootReducer";

const getState = (state: RootState): HashRateState => state?.hashRate;

export const getHashRateData = (state: RootState) =>
  getState(state)?.hashRateData;
