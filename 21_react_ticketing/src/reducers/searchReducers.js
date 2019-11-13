import { trains } from '../API/trains';

const searchReducers = (state = [], action) => {
    switch(action.type) {
        case 'GET_DATA':
          let [origin, destination, passengers] = action.payload;
          return [origin, destination, passengers]
        case 'GET_CHECKOUT_DATA':
          let [originCheckout, destinationCheckout] = action.payload;
          return state;
       	default:
       		return state
    }
}

export default searchReducers;