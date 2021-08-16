import { createAction } from "@reduxjs/toolkit";
const addUser = createAction("users/addUser");
const deleteUser = createAction("users/deleteUser");
const getAllUsers = createAction("users/getUsers");
const setFilter = createAction("users/setFilter");
const setError = createAction("users/setError");
const resetError = createAction("users/resetError");
const setLoader = createAction("users/setLoader");
const deleteUserContacts = createAction("users/deleteUserContacts");
const addCount = createAction("users/addCount");

export { addUser, deleteUser, setFilter, setError, resetError, setLoader, deleteUserContacts, getAllUsers, addCount };
