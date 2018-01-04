import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
import StatsReducer from './statsReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  stats: StatsReducer
});

export default rootReducer;
