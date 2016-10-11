import * as fetch from "isomorphic-fetch";
import { rootApiUrl } from "../constants";
import Client from "../entities/client";
import { Dispatch } from "redux";
import { ThunkAction } from './myThunkAction';

import { Action } from './myAction';

export const REQUEST_CLIENTS = "REQUEST_CLIENTS";
export const RECEIVE_CLIENTS = "RECEIVE_CLIENTS";



function requestClients() : Action<{}> {
    return {
        type: REQUEST_CLIENTS,
        payload: null
    };
}

function receiveClients(clientList : Client[]) : Action<Client[]> {
    return {
        type: RECEIVE_CLIENTS,
        payload: clientList
    };
}

export function fetchClients() : ThunkAction<void> {
    console.log("Entering the fetchClients method");
    return (dispatch, getState)  => {
        console.log("about to dispatch requestClients");
        dispatch(requestClients());
        console.log("about to fetch");
        return fetch(`${rootApiUrl}client`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data;
        })
        .then(data => dispatch(receiveClients(data)));
    }
}

export function addClient(client : Client) : ThunkAction<void> {
    // add the client to local state by dispatching it
    // send it to the server
    // update local state to remove the "saving" flag on the client
    // how do I handle the lack of id and then having an id... 
    // Actually I could remove the old version and replace with the one from the server...
}