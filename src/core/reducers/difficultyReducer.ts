import produce from "immer";
import { DIFFICULTY } from "../actions/difficultyActions";

export interface DifficultyState {
  difficultyData: Array<Array<any>>;
}

const initialState: DifficultyState = {
  difficultyData: [],
};

const difficultyReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case DIFFICULTY.FETCH.SUCCESS: {
        const { data } = payload;
        draft.difficultyData = data;
        break;
      }
      default:
        return draft;
    }
  });

export default difficultyReducer;
