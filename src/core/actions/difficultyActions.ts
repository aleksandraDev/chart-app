import action from "../../helpers/action";
import createRequestTypes from "../../helpers/createRequestTypes";
import { FETCH } from "../../helpers/constants";

export const DIFFICULTY = createRequestTypes("DIFFICULTY", [FETCH]);

export const fetchDifficultyData = {
  request: () => action(DIFFICULTY.FETCH.REQUEST),
  success: (data: any) => action(DIFFICULTY.FETCH.SUCCESS, { data }),
  failure: (error: string) => action(DIFFICULTY.FETCH.FAILURE, error),
};
