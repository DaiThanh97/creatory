import { call, put, takeLatest } from "redux-saga/effects";
import { STATUS_CODE, ROUTE } from "../../configs/constants";
import { getInfoAct, signInAct, loadingSignInAct } from "../actions/user.action";
import { GET_INFO_SAGA, SIGN_IN_SAGA } from "../constants/user.constant";
import { userService } from './../../services/user.service';
import history from './../../utils/history';
import { toast } from 'react-toastify';

function* signInUser({ payload }) {
    const { username, password } = payload;
    try {
        const { status, data } = yield call(() => userService.signIn(username, password));
        if (status === STATUS_CODE.SUCCESS) {
            // Map object data to UI
            const mapDataUI = userService.mapSignIn(data);
            // Dispatch action to store
            yield put(signInAct(mapDataUI.isAuthen));
            if (mapDataUI.isAuthen) {
                history.push(ROUTE.HOME);
            }
        }
    } catch (err) {
        toast.error('Sign in failed!');
        yield put(loadingSignInAct(false));
    }
}

function* getInfo({ payload }) {
    const { offset, limit } = payload;
    try {
        const { status, data } = yield call(() => userService.getInfo(offset, limit));
        if (status === STATUS_CODE.SUCCESS) {
            const mapList = userService.mapListInfo(data);
            // Map object data to UI
            const mapDataUI = mapList.list.map(item => userService.mapInfo(item));
            // Dispatch action to store
            yield put(getInfoAct(mapList.totalInfo, mapDataUI));
        }
    } catch (err) {
        toast.error('Get info failed!');
        yield put(loadingSignInAct(false));
    }
}

export function* userSaga() {
    yield takeLatest(SIGN_IN_SAGA, signInUser);
    yield takeLatest(GET_INFO_SAGA, getInfo);
}