import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
console.log('rootReducer',rootReducer);
let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store
