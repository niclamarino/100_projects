import { createStore, combineReducers, applyMiddleware } from "redux";
import postsReducer from "../reducers/postsReducer";
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase'

const store = createStore(
	combineReducers({
		posts: postsReducer
	}),
	applyMiddleware(thunk)
);

export default store;
