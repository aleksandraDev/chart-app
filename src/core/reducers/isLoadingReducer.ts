import produce from "immer";
import { Action } from "redux";

export interface IsLoadingState {
  [key: string]: boolean;
}

const getLoadingMatches = (actionType: string) =>
  /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

const isLoadingReducer = (state: IsLoadingState = {}, action: Action) => {
  return produce(state, (draft) => {
    const matches = getLoadingMatches(action.type);

    if (!matches) {
      return state;
    }

    const [, requestName, requestStatus] = matches;
    draft[requestName + "_REQUEST"] = requestStatus === "REQUEST";
  });
};

export default isLoadingReducer;
