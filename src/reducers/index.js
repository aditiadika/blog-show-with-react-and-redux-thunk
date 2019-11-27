import { combineReducers } from 'redux';
import postsReducers from './postsReducer';
import userReducers from './userReducer';

export default combineReducers({
	posts: postsReducers,
	users: userReducers
});
