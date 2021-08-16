// import { createSelector } from "@reduxjs/toolkit";

export const authorizedUser = (state) => Boolean(state.auth.tokens.idToken);
export const getErrorAuth = (state) => state.auth.error;
