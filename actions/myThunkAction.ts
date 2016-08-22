// This simplifies ThunkAction by giving it the type of my state as well as the type
// of extraArgument (none in this case)
 
import { ThunkAction } from "../myReduxThunk";
import { RootState } from '../rootStore'; 

export type ThunkAction<R> = ThunkAction<R, RootState, {}>;
