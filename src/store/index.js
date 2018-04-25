import  UserPostReducer  from '../reducer/UserPostReducer';
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
const reducer = {
	UserPostReducer
}
const combReducer = combineReducers(reducer);
const rootReducer = createStore(combReducer,applyMiddleware(thunk));

export default rootReducer;