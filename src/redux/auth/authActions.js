import { createAction } from "@reduxjs/toolkit";

// export const registerUser = createAction("auth/registerUser");
// export const loginUser = createAction("auth/loginUser");
// export const signOut = createAction("auth/signOut");

export const registerUserRequest = createAction("auth/registerUserRequest");
export const registerUserSuccess = createAction("auth/registerUserSuccess");
export const registerUserError = createAction("auth/registerUserError");

export const loginUserRequest = createAction("auth/loginUserRequest");
export const loginUserSuccess = createAction("auth/loginUserSuccess");
export const loginUserError = createAction("auth/loginUserError");

export const signOutRequest = createAction("auth/signOutRequest");
export const signOutSuccess = createAction("auth/signOutSuccess");
export const signOutError = createAction("auth/signOutError");
