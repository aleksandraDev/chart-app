import { put, takeEvery } from "redux-saga/effects";
import { HASH_RATE, fetchHashRateData } from "../actions/hashRateActions";
import { fetchAppleData, fetchGoogleData } from "../../services/api";

export function* callHashRateApi() {
  try {
    const response = yield Promise.all([fetchAppleData, fetchGoogleData]).then(
      (res) => res
    );
    console.log("response", response);

    yield put(fetchHashRateData.success(response));
  } catch (error) {
    yield put(fetchHashRateData.failure(error));
  }
}

export default function* hashRateSaga() {
  yield takeEvery(HASH_RATE.FETCH.REQUEST, callHashRateApi);
}
