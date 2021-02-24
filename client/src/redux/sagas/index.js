import { all } from 'redux-saga/effects';
import { userSaga, userSaga2 } from './user.saga';

export function* rootSaga() {
    yield all([
        userSaga()
    ]);
}