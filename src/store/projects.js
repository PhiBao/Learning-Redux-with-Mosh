import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    // action : action handlers
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
        isCompleted: false,
      });
    },
    projectCompleted: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      projects[index].isCompleted = true;
    },
    projectRemoved: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      projects.remove(index);
    },
  },
});

export const { projectAdded, projectRemoved, projectCompleted } = slice.actions;
export default slice.reducer;
