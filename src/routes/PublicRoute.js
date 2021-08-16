import React from "react";
import { connect, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authorizedUser } from "../redux/auth/authSelectors";

const PublicRoute = ({ path, component, exact, restricted }) => {
  const isAuth = useSelector(authorizedUser);
  return isAuth && restricted ? <Redirect to="/contacts" /> : <Route path={path} exact={exact} component={component} />;
};

// const mapStateToProps = (state) => {
//   return { isAuth: authorizedUser(state) };
// };

export default PublicRoute;
// export default connect(mapStateToProps)(PublicRoute);
