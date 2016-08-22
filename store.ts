import { createStore, Reducer, applyMiddleware  } from 'redux';
import { RootState } from "./rootStore";

import thunk from './myReduxThunk';

//import createLogger from 'redux-logger'
import rootReducer from './reducers/rootReducer';

//const loggerMiddleware = createLogger()
//export type Reducer<S> = <A extends Action>(state: S, action: A) => S;
const store = createStore<RootState>(
    rootReducer
   ,
   applyMiddleware(thunk)
    );

export default store;