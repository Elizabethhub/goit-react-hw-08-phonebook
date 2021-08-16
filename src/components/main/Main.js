import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { authorizedUser } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import { MainContainer } from "./MainStyled";

const Main = () => {
  const isAuth = useSelector(authorizedUser);
  return (
    <MainContainer>
      <Suspense fallback={<h2>...minions are working</h2>}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...route} key={route.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isAuth: authorizedUser(state),
//   };
// };
// export default connect(mapStateToProps)(Main);
export default Main;
