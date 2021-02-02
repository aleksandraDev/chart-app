import { put, takeLatest } from "redux-saga/effects";
import { DIFFICULTY, fetchDifficultyData } from "../actions/difficultyActions";

import { fetchMicrosoftData, fetchAppleData } from "../../services/api";

export function* callDifficultyApi() {
  try {
    const response = yield Promise.all([
      fetchMicrosoftData,
      fetchAppleData,
    ]).then((res) => res);
    yield put(fetchDifficultyData.success(response));
  } catch (error) {
    yield put(fetchDifficultyData.failure(error));
  }
}

export default function* difficultySaga() {
  yield takeLatest(DIFFICULTY.FETCH.REQUEST, callDifficultyApi);
}
