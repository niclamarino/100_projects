import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import AddPost from "../../components/AddPost";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

test("should render AddPost", () => {
	// const initialState = {};
	// const store = mockStore(initialState);
	// const renderer = new ReactShallowRenderer();

	// renderer.render(<AddPost store={store} />);
	// console.log(renderer.getRendererOutput());
});
