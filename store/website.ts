import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface websiteState {
    isAssetsLoaded: boolean;
}

// Initial state
const initialState: websiteState = {
    isAssetsLoaded: false,
};

// Actual Slice
export const websiteSlice = createSlice({
  name: "website",
  initialState,
  reducers: {
    // Action to set the authentication status
    setIsAssetsLoaded(state, action) {
        state.isAssetsLoaded = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.website,
      };
    },
  },
});

export const { setIsAssetsLoaded } = websiteSlice.actions;

//selectors for reducers
export const selectIsAssetLoaded = (state: AppState) => state.website.isAssetsLoaded;

export default websiteSlice.reducer;