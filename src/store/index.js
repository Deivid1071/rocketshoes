import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const ennhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, ennhancer);

export default store;
