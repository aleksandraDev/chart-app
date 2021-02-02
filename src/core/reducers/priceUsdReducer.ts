import produce from "immer";
import { PRICE_USD } from "../actions/priceUsdActions";

export interface PriceUsdState {
  priceUsdData: Array<Array<any>>;
}

const initialState: PriceUsdState = {
  priceUsdData: [],
};

const priceUsdReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case PRICE_USD.FETCH.SUCCESS: {
        const { data } = payload;
        draft.priceUsdData = data;
        break;
      }
      default:
        return draft;
    }
  });

export default priceUsdReducer;
