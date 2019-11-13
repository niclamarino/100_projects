export const calcDiscount = (price, discount) => {
	return ((price - discount) / price * 100).toFixed(0);
};