import { takeLatest, call, select } from 'redux-saga/effects';

import { UPDATE_STATUS } from './../actions';
import { currentUserSelector } from './../selectors';

function* putUserStatus({ status }) {
  const currentUser = yield select(currentUserSelector);
  const id = currentUser.get('id');
  console.log('PUT_USER_STATUS', currentUser.get('status'));
  yield call(() => fetch(`/status/${id}/${status}`));
}

export function* currentUserStatusSaga() {
  yield takeLatest(UPDATE_STATUS, putUserStatus);
}
