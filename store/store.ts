import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { skillsSlice } from "./skills";
import { projectSlice } from "./project";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [skillsSlice.name]: skillsSlice.reducer,
      [projectSlice.name]: projectSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);