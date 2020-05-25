import { combineReducers } from 'redux'
import cart from './cart.js'
import order from './order.js'
export default combineReducers({
    cart,
    order
})

