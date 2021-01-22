import { all } from 'redux-saga/effects';

import friend from './friend/sagas';

export default function* rootSaga() {
  return yield all([friend]);
}
