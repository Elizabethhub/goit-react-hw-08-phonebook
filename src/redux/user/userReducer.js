import { createReducer } from "@reduxjs/toolkit";
import { loginUserSuccess, registerUserSuccess, signOutSuccess } from "../auth/authActions";

export const userReducer = createReducer(
  { email: "", localId: "" },
  {
    [registerUserSuccess]: (_, { payload }) => ({
      email: payload.email,
      localId: payload.localId,
    }),
    [loginUserSuccess]: (_, { payload }) => ({
      email: payload.email,
      localId: payload.localId,
    }),
    [signOutSuccess]: () => ({ email: "", localId: "" }),
  }
);
