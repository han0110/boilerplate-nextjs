import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware)

const initStore = initialState => {
  const store = createStore(reducers, initialState, middlewares)
  sagaMiddleware.run(rootSaga)

  return store
}

export default initStore
