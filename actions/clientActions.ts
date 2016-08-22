import * as fetch from "isomorphic-fetch";
import { rootApiUrl } from "../constants.ts";
import Client from "../entities/client";
import { Dispatch } from "redux";
import { ThunkAction } from './myThunkAction';

import { Action } from './myAction';

export const REQUEST_CLIENTS = "REQUEST_CLIENTS";
export const RECEIVE_CLIENTS = "RECEIVE_CLIENTS";



export function requestClients() : Action<{}> {
    return {
        type: REQUEST_CLIENTS,
        payload: null
    };
}

export function receiveClients(clientList : Client[]) : Action<Client[]> {
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