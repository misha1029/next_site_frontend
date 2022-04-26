import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { userReduser } from './slices/user'

/* import counterReducer from '../features/counter/counterSlice' */

export function makeStore() {
  return configureStore({
    reducer: { user: userReduser },
  })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>