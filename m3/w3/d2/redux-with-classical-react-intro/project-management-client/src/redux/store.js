import { configureStore } from "@reduxjs/toolkit";

import projectsSlice from "./slices/projects.slice.js";
import counterSlice from "./slices/counter.slice.js";

const store = configureStore({
  reducer: {
    // Here we specify/set the slices that store will have
    projects: projectsSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export default store;
