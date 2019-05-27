import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { takeEvery, put, call } from 'redux-saga/effects';
import { reducer } from './reducer';
import { requestDog, requestDogSuccess, requestDogError} from './action';

// Sagas
function* watchFetchDog() {
  console.log("watchFetchDog");
  yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
    }
    );
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}

// Store

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchDog);

export default store;