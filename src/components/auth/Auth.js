import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContainer } from "./AuthStyled";
import sprite from "../../images/icons/sprite.svg";
import { useLocation } from "react-router-dom";
import { getErrorAuth } from "../../redux/auth/authSelectors";
import { registerUserOperation, loginUserOperation } from "../../redux/auth/authOperation";

const initialState = {
  email: "",
  password: "",
};

const Auth = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();
  const dispatch = useDispatch();
  const error = useSelector(getErrorAuth);

  useEffect(() => {
    if (error === "Request failed with status code 400")
      return () => {
        alert(`${this.state.email} is already exists in the Phonebook`);
      };
  }, [error, dispatch]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (error !== prevProps.error) {
  //     if (error === "Request failed with status code 400") {
  //       return alert(`${this.state.email} is already exists in the Phonebook`);
  //     }
  //   }
  // }

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // const { email, password } = state;
    location.pathname === "/signup" ? dispatch(registerUserOperation(state)) : dispatch(loginUserOperation(state));
  };

  return (
    <AuthContainer>
      <form onSubmit={onHandleSubmit} className="user-form" autoComplete="off" name="userForm">
        <label className="user-label">
          Email
          <input
            type="text"
            name="email"
            onChange={onHandleChange}
            value={state.email}
            className="user-input"
            placeholder="max@gmail.com"
            minLength="3"
            autoComplete="on"
            required
          />
          <svg className="icon-user">
            <use href={sprite + "#icon-envelop"} />
          </svg>
        </label>
        <label className="user-label">
          Password
          <input
            type="text"
            name="password"
            onChange={onHandleChange}
            value={state.password}
            className="user-input"
            required
            placeholder="AbraCadabra555"
            autoComplete="on"
          />
          <svg className="icon-user">
            <use href={sprite + "#icon-lock"} />
          </svg>
        </label>
        <button type="submit" className="user-button">
          {state.pathname === "/signup" ? "Register" : "Login"}
        </button>
      </form>
    </AuthContainer>
  );
};

export default Auth;

// class Auth extends Component {

//   render() {
//     const { pathname } = this.props.location;
//     const { email, password } = this.state;
//     return (

//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   error: state.auth.error,
// });

// export default connect(mapStateToProps, { registerUserOperation, loginUserOperation })(withRouter(Auth));
