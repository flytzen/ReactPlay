import fetch from "isomorphic-fetch";

const rootApiUrl = 'http://localhost:5000/api/';
export const REQUEST_CLIENTS = "REQUEST_CLIENTS";
export const RECEIVE_CLIENTS = "RECEIVE_CLIENTS";

export function requestClients() {
    return {
        type: REQUEST_CLIENTS
    };
}

export function receiveClients(clientList) {
    return {
        type: RECEIVE_CLIENTS,
        data: clientList
    };
}

export function fetchClients() {
    console.log("Entering the fetchClients method");
    return dispatch => {
        console.log("about to dispatch requestClients")
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