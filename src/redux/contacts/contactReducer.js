import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { signOutSuccess } from "../auth/authActions";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  getContactError,
  getContactSuccess,
  getContactRequest,
  setFilter,
} from "./contactActions";

export const items = createReducer([], {
  [getContactSuccess]: (_, { payload }) => [...payload],
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => state.filter((item) => item.id !== payload),
  [signOutSuccess]: () => [],
});

// const contactItemReducer = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) => state.filter((item) => item.id !== action.payload),
// });

export const filter = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

// const filterReducer = createReducer("", {
//   [setFilter]: (_, action) => action.payload,
// });

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
});

const setError = (_, { payload }) => payload;
const resetError = () => null;

const error = createReducer(null, {
  [addContactRequest]: resetError,
  [addContactError]: setError,
  [deleteContactRequest]: resetError,
  [deleteContactError]: setError,
  [getContactRequest]: resetError,
  [getContactError]: setError,
});

// const contactReducer = combineReducers({
//   items: contactItemReducer,
//   filter: filterReducer,
// });

const contactReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default contactReducer;
