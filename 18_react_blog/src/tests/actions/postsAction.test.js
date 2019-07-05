import {
	deletePost,
	editPost,
	addPost,
	addLike
} from "../../actions/postsActions";
import moment from "moment";

test("should setup remove post action object", () => {
	const action = deletePost("123abc");
	expect(action).toEqual({
		type: "DELETE_POST",
		url: "123abc"
	});
});

test("should update post property", () => {
	const action = editPost({ title: "New title" });
	expect(action).toEqual({
		type: "EDIT_POST",
		payload: { title: "New title" }
	});
});

test("should setup addPost with default values", () => {
	const defaultPayload = {
		title: "",
		body: "",
		createdAt: moment()
	}
	const action = addPost(defaultPayload);
	expect(action).toEqual({
		type: 'ADD_POST',
		payload: {
			...defaultPayload,
			createdAt: expect.any(Object)
		}
	})
})

test("should setup addPost with new values", () => {
	const action = addPost({
		title: "Title",
		body: "This is body",
		createdAt: "03 11, 1992"
	});
	expect(action).toEqual({
		type: "ADD_POST",
		payload: {
			title: "Title",
			body: "This is body",
			createdAt: "03 11, 1992"
		}
	});
});
