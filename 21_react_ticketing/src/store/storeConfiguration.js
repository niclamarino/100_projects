import { createStore } from 'redux';
import searchReducers from '../reducers/searchReducers';

const store = createStore(searchReducers);

export default store;