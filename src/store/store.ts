import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

/**
 *  createSagaMiddleware() Creates a Redux middleware and connects the Sagas to the Redux Store.
 */
const sagaMiddleware = createSagaMiddleware()

/**
 *  configureStore() function is used to create/configure global app store. 
 *  A friendly abstraction over the standard Redux createStore() function.
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
