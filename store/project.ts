import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface projectState {
    isProjectSelected: boolean;
    currentProjectData: any;
}

// Initial state
const initialState: projectState = {
    isProjectSelected : false,
    currentProjectData: {}
};

// Actual Slice
export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // Action to set the authentication status
    setIsProjectSelected(state, action) {
        state.isProjectSelected = action.payload;
    },
    setProjectData(state, action) {
      state.currentProjectData = action.payload;
    },
    
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.project,
      };
    },
  },
});

export const { setProjectData, setIsProjectSelected } = projectSlice.actions;

//selectors for reducers
export const selectCurrentProjectData = (state: AppState) => state.project.currentProjectData;
export const selectIsProjectSelected = (state: AppState) => state.project.isProjectSelected;

export default projectSlice.reducer;