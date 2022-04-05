import { createStore,combineReducers,compose,applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import RootSaga from "./rooSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware=createSagaMiddleware();
const middlewares=[sagaMiddleware];
const reducers=combineReducers({
    ...rootReducer,
});

const store=createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
)

sagaMiddleware.run(RootSaga);
export default store;