import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { userReduser } from './slices/user';
import {createWrapper} from 'next-redux-wrapper';

/* import counterReducer from '../features/counter/counterSlice' */

export function makeStore() {
  return configureStore({
    reducer: { user: userReduser },
  })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStore, unknown, Action<string>>;



export const wrapper = createWrapper<RootStore>(makeStore);