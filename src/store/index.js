import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMidleware from 'redux-saga';

import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMidleware = createSagaMidleware({
  sagaMonitor,
});

const ennhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMidleware))
    : applyMiddleware(sagaMidleware);

const store = createStore(rootReducer, ennhancer);

sagaMidleware.run(rootSaga);

export default store;
