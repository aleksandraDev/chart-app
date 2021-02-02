import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

export default function configureAppStore(initialState = {}, history: any) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production",
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
