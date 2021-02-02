import { DifficultyState } from "../reducers/difficultyReducer";
import { RootState } from "../reducers/rootReducer";

const getState = (state: RootState): DifficultyState => state?.difficulty;

export const getDifficultyData = (state: RootState) =>
  getState(state)?.difficultyData;
