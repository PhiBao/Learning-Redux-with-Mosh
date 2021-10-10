import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    // action : action handlers
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
        resolved: false,
      });
    },
    userRemoved: (users, action) => {
      const index = users.findIndex((user) => user.id === action.payload.id);
      users.remove(index);
    },
  },
});

export const { userAdded, userRemoved, userResolved } = slice.actions;
export default slice.reducer;

// Selector
export const getUnresolvedUsers = createSelector(
  (state) => state.entities.users,
  (users) => users.filter((user) => !user.resolved)
);
