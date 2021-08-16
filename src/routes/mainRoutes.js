import { lazy } from "react";

export const mainRoutes = [
  //public
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/HomePage") /* webpackChunkName: "HomePage" */),
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  {
    name: "About",
    path: "/about",
    component: lazy(() => import("../pages/AboutPage") /* webpackChunkName: "AboutPage" */),
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  //private
  {
    name: "Phonebook",
    path: "/contacts",
    component: lazy(() => import("../pages/ContactsPage") /* webpackChunkName: "ContactsPage" */),
    exact: true,
    isPrivate: true,
    restricted: false,
  },
  //restricted
  {
    name: "Sign Up",
    path: "/signup",
    component: lazy(() => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
  {
    name: "Sign In",
    path: "/signin",
    component: lazy(() => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
];
