export const deletePost = url => {
	return {
		type: "DELETE_POST",
		url
	};
};

export const editPost = payload => ({
	type: "EDIT_POST",
	payload
});

export const addPost = payload => ({
	type: "ADD_POST",
	payload
});

export const addLike = (url, likes) => ({
	type: "ADD_LIKE",
	likes,
	url
});
