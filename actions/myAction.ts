// This basically redefines Actions to be more specific, but because it still implements
// redux's underlying action, all the stuff that relies on it, such as Dispatch, "just works". 
// I could redefine Dispatch to specifically take an Action<T> but I don't think there is any value in that

import { Action } from 'redux';

export interface Action<T> extends Action {
    type: string;
    payload: T;
    error?: boolean;
    meta?: any;
}