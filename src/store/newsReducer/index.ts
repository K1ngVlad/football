import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
// import { New, NewsState } from './types';

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
});

export default newsSlice.reducer;
// export type { New, NewsState };
