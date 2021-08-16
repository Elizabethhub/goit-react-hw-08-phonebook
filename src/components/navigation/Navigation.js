import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../../redux/auth/authActions";
import { authorizedUser } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(signOutSuccess());
  };
  const isAuth = useSelector(authorizedUser);
  return (
    <NavigationContainer>
      <ul className="navList">
        {mainRoutes.map((route) => (
          <NavigationListItem {...route} key={route.path} isAuth={isAuth} />
        ))}
        {
          isAuth && (
            <li className="navLink" onClick={signOut}>
              LOGOUT
            </li>
          )
          // && <span className="navLink">Welcome, {name}</span>
        }
      </ul>
    </NavigationContainer>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isAuth: authorizedUser(state),
//   };
// };

// export default connect(mapStateToProps, { signOutSuccess })(Navigation);
export default Navigation;
