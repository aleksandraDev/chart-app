import action from "../../helpers/action";
import createRequestTypes from "../../helpers/createRequestTypes";
import { FETCH } from "../../helpers/constants";

export const HASH_RATE = createRequestTypes("HASH_RATE", [FETCH]);

export const fetchHashRateData = {
  request: () => action(HASH_RATE.FETCH.REQUEST),
  success: (data: any) => action(HASH_RATE.FETCH.SUCCESS, { data }),
  failure: (error: string) => action(HASH_RATE.FETCH.FAILURE, error),
};
