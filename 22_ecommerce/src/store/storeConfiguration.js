import { createStore } from 'redux';
import productsReducer from '../reducers/productsReducer';

const store = createStore(productsReducer);

export default store;