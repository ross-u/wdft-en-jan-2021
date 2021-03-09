import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    value: [],
  },
  reducers: {
    addProject: (sliceState, action) => {  // addProject( {...}  )
      // we have to assign a new array or object
      sliceState.value = [ ...sliceState.value, action.payload ];
    },

    addAllProjects: (sliceState, action) => {  // addAllProjects(  []   ) 
      sliceState.value = [ ...action.payload ];
    } 
  }
});


// Export the function that enable us to dispatch an action
const { addProject, addAllProjects } = projectSlice.actions;
export {
  addProject,
  addAllProjects
};

  
export default projectSlice;
