export const deleteProduct = id => {
	return {
		type: "DELETE_PRODUCT",
		id
	};
};

export const updateQuantity = (id, quantity) => {
	return {
		type: "UPDATE_QUANTITY",
		quantity,
		id
	};
};