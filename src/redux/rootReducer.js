import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./users/usersReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authReducer";
import { userReducer } from "./user/userReducer";
import persistReducer from "redux-persist/es/persistReducer";
import contactReducer from "./contacts/contactReducer";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["tokens"],
};

const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["localId", "email"],
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  phonebookUsers: usersReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
});

export default rootReducer;
