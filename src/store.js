import { combineReducers } from 'redux';
import { createStore } from 'redux';
import {loginModal} from "./reducers/modal";



let rootReducer = combineReducers({
    loginModal
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())