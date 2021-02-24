import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import { rootSaga } from './sagas';
import userReducer from './reducers/user.reducer';

const saga = createSaga();
const rootReducer = combineReducers({
    userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;