import produce from "immer";
import { HASH_RATE } from "../actions/hashRateActions";

export interface HashRateState {
  hashRateData: Array<Array<any>>;
}

const initialState: HashRateState = {
  hashRateData: [],
};

const hashRateReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case HASH_RATE.FETCH.SUCCESS: {
        const { data } = payload;
        draft.hashRateData = data;
        break;
      }
      default:
        return draft;
    }
  });

export default hashRateReducer;
