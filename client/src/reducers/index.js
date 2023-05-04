import { combineReducers } from 'redux';
import AlertReducer from './alert';
import AuthReducer from './auth';
import ProfileReducer from './profile';
import PostReducer from './post';
export default combineReducers({
  alert: AlertReducer,
  auth: AuthReducer,
  profile: ProfileReducer,
  post: PostReducer,
});
