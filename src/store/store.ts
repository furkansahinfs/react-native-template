import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export type IRootState = ReturnType<typeof reducers>;

export default store;
