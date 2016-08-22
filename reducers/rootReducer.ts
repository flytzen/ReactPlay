import { combineReducers, Action } from 'redux';
import entityReducer from './entityReducers';
import { RootState } from '../rootStore';

const rootReducer  = combineReducers<RootState>({
  entities : entityReducer
})

export default rootReducer