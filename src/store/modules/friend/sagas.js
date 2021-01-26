import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { addFailure } from './actions';

export function* addFriend(payload) {
  try {
    const { name, email } = payload.payload;

    yield call(api.post, 'friends', {
      name,
      email,
    });

    toast.success('Amigo cadastrado com sucesso!');
  } catch {
    toast.error('Erro ao cadastrar amigo.');

    yield put(addFailure());
  }
}

export default all([takeLatest('@friend/ADD_REQUEST', addFriend)]);
