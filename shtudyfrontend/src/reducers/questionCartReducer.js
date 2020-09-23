export default function 
questionCartReducer(cart = [], action) {
	switch (action.type) {
		case 'REMOVE_QUESTION_CART':
			return cart.filter(question => {
				return question._id !== action.payload._id
			})
		
		case 'ADD_QUESTION_CART':
			return [...cart, action.payload]
		
		default:
			return cart
	}
};
