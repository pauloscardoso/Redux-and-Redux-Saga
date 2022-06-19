// Redux Saga é um middleware - um interceptador. Pode ser executado entre uma Action e um Reducer.

import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

export default function* rootSaga(): any {
  return yield all([cart]);
}
