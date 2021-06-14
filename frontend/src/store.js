import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import data from './data';
import { productListReducer } from './reducers/productReducers';

const initialState = {}; // membuat initial state
// const reducer = (state, action) => { // membuat reducer
//     return {products: data.products };
// }; Ini dibuat secara static

const reducer = combineReducers({
    productList: productListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;