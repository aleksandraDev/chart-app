import { put, takeLatest } from "redux-saga/effects";
import { PRICE_USD, fetchPriceUsdData } from "../actions/priceUsdActions";
import { priceUsdApi } from "../../services/api";

export function* callDifficultyApi() {
  console.log("called dif");

  try {
    const { data } = yield priceUsdApi();
    yield put(fetchPriceUsdData.success(data));
  } catch (error) {
    console.log("error", error);
    yield put(fetchPriceUsdData.failure(error));
  }
}

export default function* difficultySaga() {
  yield takeLatest(PRICE_USD.FETCH.REQUEST, callDifficultyApi);
}
