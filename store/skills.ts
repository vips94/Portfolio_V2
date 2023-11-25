import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface SkillState {
    propertiesBorderColor: string;
    propertiesBtnMaskColor: string;
    propetiedTextColor: string;
    propertyTextStroke: string;
    propertiesMaskOpacity: number;
    currenPropertiesIndex: number;
}

// Initial state
const initialState: SkillState = {
    propertiesBorderColor:  '#f55c1b', //'#DBFF00',
    propertiesBtnMaskColor: '#F99D76',
    propetiedTextColor: '#f55c1b',
    propertyTextStroke: 'white',
    propertiesMaskOpacity: 0.95,
    currenPropertiesIndex: 0
};

// Actual Slice
export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    // Action to set the authentication status
    setPropertiesBorderColor(state, action) {
      state.propertiesBorderColor = action.payload;
    },
    setPropertiesBtnMaskColor(state, action) {
      state.propertiesBtnMaskColor = action.payload;
    },
    setPropetiedTextColor(state, action) {
      state.propetiedTextColor = action.payload;
    },
    setPropertyTextStroke(state, action) {
      state.propertyTextStroke = action.payload;
    },
    setPropertiesMaskOpacity(state, action) {
      state.propertiesMaskOpacity = action.payload;
    },
    setCurrenPropertiesIndex(state, action) {
      state.currenPropertiesIndex = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.skills,
      };
    },
  },
});

export const { setPropertiesBorderColor, setPropertiesBtnMaskColor, setPropetiedTextColor, setPropertyTextStroke, setPropertiesMaskOpacity, setCurrenPropertiesIndex } = skillsSlice.actions;


//selectors for reducers
export const selectPropertiesBorderColor = (state: AppState) => state.skills.propertiesBorderColor;
export const selectPropertiesBtnMaskColor = (state: AppState) => state.skills.propertiesBtnMaskColor;
export const selectPropertiesTextColor = (state: AppState) => state.skills.propetiedTextColor;
export const selectPropertiesMaskOpacity = (state: AppState) => state.skills.propertiesMaskOpacity;
export const selectPropertyTextStroke = (state: AppState) => state.skills.propertyTextStroke;
export const selectCurrentPropertiesIndex = (state: AppState) => state.skills.currenPropertiesIndex;

export default skillsSlice.reducer;