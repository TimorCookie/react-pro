import store from './store';
import {
  addToCart,
  updatedCart,
  deleteFromCart
} from './actions/cart-actions';

console.log("initial state:", store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(addToCart('apple', 2, 40));
store.dispatch(addToCart('banana', 1, 32));
store.dispatch(updatedCart('bread 700g',20,500))
store.dispatch(deleteFromCart('banana'));

unsubscribe()