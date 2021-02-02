import action from "../../helpers/action";
import createRequestTypes from "../../helpers/createRequestTypes";
import { FETCH } from "../../helpers/constants";

export const PRICE_USD = createRequestTypes("PRICE_USD", [FETCH]);

export const fetchPriceUsdData = {
  request: () => action(PRICE_USD.FETCH.REQUEST),
  success: (data: any) => action(PRICE_USD.FETCH.SUCCESS, { data }),
  failure: (error: string) => action(PRICE_USD.FETCH.FAILURE, error),
};
