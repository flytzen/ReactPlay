// Had the weirdest typescrupt module problems with webpack and redux-thunk
// VS Code would recognise the module but not webpack
// This copied version does not support extraArgument
// setting moduleResolution = node may fix it - see http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/
import {Middleware, Dispatch} from "redux";

function createThunkMiddleware() : Middleware {
  return ({ dispatch , getState } : any) => (next : any) => (action : any) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
}

const thunk: Middleware  = createThunkMiddleware();

export default thunk;


export type ThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S,
                                    extraArgument: E) => R;

declare module "redux" {
  export interface Dispatch<S> {
    <R, E>(asyncAction: ThunkAction<R, S, E>): R;
  }
}


