import postsReducer from '../../reducers/postsReducer';
import posts from '../fixtures/posts';
import moment from 'moment';

// test('should set default state', () => {
// 	const state = postsReducer(undefined, {type: '@@INIT'});
// 	expect(state).toEqual([...posts, {createdAt: 'asdasda'}])
// })

test('should delete post', () => {
	const action ={
		type: 'DELETE_POST',
		url: posts[1].url
	}
	const state = postsReducer(posts, action);
	expect(state).toEqual([posts[0], posts[2]]);
});

test('should not delete post if url/id is not found', () => {
	const action ={
		type: 'DELETE_POST',
		url: undefined
	}
	const state = postsReducer(posts, action);
	expect(state).toEqual(posts);
});

test('should add post', () => {
	const action ={
		type: 'ADD_POST',
		payload: {
			title: "I am a title",
			body: "I am a body",
			coverImage: "",
			url: "i_am_title",
			createdAt: moment(),
		}
	}
	const state = postsReducer(posts, action);
	expect(state).toEqual([...posts, action.payload]);
});

test('should edit post', () => {
	const post = {
    title: "Sometitle",
    url: "sometitle",
    body: "This is my body and soul",
    coverImage:
      "https://www.gourmet-gatto.it/sites/default/files/article/mobile/come-fanno-fusa-gatti-perche-mordono-prev.jpg",
    category: "Driver",
    likes: 0
	}
	const action ={
		type: 'EDIT_POST',
		payload: {
			...post,
			createdAt: expect.any(String)
		}
	}
	const state = postsReducer(posts, action);
	expect(state).toEqual([...posts, action.payload]);
});