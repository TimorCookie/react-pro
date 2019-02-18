import { createStore } from 'redux';
import { combineReducers } from 'redux';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}


const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}
const ADD_TO_CART = 'ADD_TO_CART'


function productsReducer (state=[], action) {
  return state
}
function cartReducer (state=initialState, action) {
  switch(action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }

    default: 
    return state
  }
  return state
}


function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: {
      product, quantity, unitCost
    }
  }
}



const rootReducer = combineReducers(allReducers)
const store = createStore(rootReducer)
console.log('initial state:', store.getState())

let unsubscribe = store.subscribe(()=> console.log(store.getState()))

store.dispatch(addToCart('orange 1kg',1,47))
store.dispatch(addToCart('apple 2kg',3,20))
unsubscribe()

