import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { signOutSuccess } from "../auth/authActions";

import { addUser, deleteUser, getAllUsers, resetError, setError, setFilter, setLoader } from "./usersActions";

const itemsReducer = createReducer([], {
  [getAllUsers]: (_, { payload }) => payload,
  [addUser]: (state, { payload }) => [...state, payload],
  [deleteUser]: (state, { payload }) => state.filter((item) => item.id !== payload),
  [signOutSuccess]: () => [],
});

const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
  [signOutSuccess]: () => "",
});
const isLoadingReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const errorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
  [signOutSuccess]: () => "",
});

const usersReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: isLoadingReducer,
});

export default usersReducer;
