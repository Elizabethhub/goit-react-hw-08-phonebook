import { login, register } from "../../services/auth_api";
// import { addUser } from "../users/usersActions";
import {
  loginUserError,
  loginUserRequest,
  loginUserSuccess,
  registerUserError,
  registerUserRequest,
  registerUserSuccess,
} from "./authActions";

const registerUserOperation = (user) => async (dispatch) => {
  dispatch(registerUserRequest());
  try {
    const response = await register(user);
    dispatch(registerUserSuccess(response.registerData));
    // dispatch(addUser({ ...user, id: response.id }));
  } catch (error) {
    dispatch(registerUserError(error.message));
  }
};
const loginUserOperation = (user) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await login(user);
    dispatch(loginUserSuccess(response.loginData));
  } catch (error) {
    dispatch(loginUserError(error.message));
  }
};

export { registerUserOperation, loginUserOperation };
