'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { New, NewsState } from './newsReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type { New, NewsState };
