import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type IRootState = ReturnType<typeof reducer>;

export default store;
