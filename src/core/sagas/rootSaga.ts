import { all, spawn } from "redux-saga/effects";

import difficultySaga from "./difficultySaga";
import hashRateSaga from "./hashRateSaga";

export function* startWatchers() {
  yield all([spawn(difficultySaga), spawn(hashRateSaga)]);
}

export default function* rootSaga() {
  yield all([startWatchers()]);
}
