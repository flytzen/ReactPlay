import { combineReducers } from 'redux';
import { Entities, EntitySet } from "../rootStore";
import Client from "../entities/client";
import { Action } from "../actions/myAction"

import {REQUEST_CLIENTS, RECEIVE_CLIENTS} from '../actions/clientActions';

function clientReducer (state : EntitySet<Client> = {
    isFetching: false,
    items: []
}, action : Action<Client[]>) {  
    switch (action.type) {
        case REQUEST_CLIENTS:
            return Object.assign({}, state, { isFetching: true});
        case RECEIVE_CLIENTS:
            return Object.assign({}, state, { 
                isFetching: false,
                items: action.payload    
            });
        default:
            return state;
    }
}

const entityReducer = combineReducers<Entities>({
  clients : clientReducer
})

export default entityReducer