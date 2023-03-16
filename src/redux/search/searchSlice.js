import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearchOpen: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleSearch: (state) => ({ isSearchOpen: !state.isSearchOpen }),
  },
});

const searchReducer = searchSlice.reducer;
export const { toggleSearch } = searchSlice.actions;
export default searchReducer;
