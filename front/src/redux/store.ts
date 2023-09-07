import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices';

const store = configureStore({
  devTools: true,
  reducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store