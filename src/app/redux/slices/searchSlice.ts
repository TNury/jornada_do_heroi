import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type SearchState = {
  value: string;
};

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { update } = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.value;

export default searchSlice.reducer;
