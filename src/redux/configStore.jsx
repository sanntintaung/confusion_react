import {createStore} from 'redux';
import {Reducer,initialState} from '../redux/reducer';
export const configStore = _ => {
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}
