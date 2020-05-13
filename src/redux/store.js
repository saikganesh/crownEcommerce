import {createStore,applyMiddleware} from "redux";
import rootReducer from "./rootReducer"

import logger from "redux-logger"

import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

import {persistStore} from "redux-persist"
 
const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

if(process.env.NODE_ENV === "development")
{
    middleware.push(logger)
}

export const store = createStore(rootReducer,applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export const persistor  = persistStore(store)

//export default {store,persister};