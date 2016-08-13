import {combineReducers} from 'redux';

import {REQUEST_CLIENTS, RECEIVE_CLIENTS} from './actions';

function clients(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_CLIENTS:
            return Object.assign({}, state, { isFetching: true});
        case RECEIVE_CLIENTS:
            return Object.assign({}, state, { 
                isFetching: false,
                items: action.data    
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
  clients
})

export default rootReducer