import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import thunkMiddleware from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware, thunkMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
