import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }
