import { createSelector } from "reselect";

const isLoadingSelector = (state) => state.phonebookUsers.isLoading;
const errorSelector = (state) => state.phonebookUsers.error;
const phonebookUsers = (state) => state.phonebookUsers.items;
const usersFilter = (state) => state.phonebookUsers.filter;

const usersSelector = (state) =>
  state.phonebookUsers.items.filter(({ email }) =>
    [email].some((item) => item.toLowerCase().includes(state.phonebookUsers.filter.toLowerCase()))
  );

const memoizeUsersSelector = createSelector([phonebookUsers, usersFilter], (users, filter) =>
  users.filter(({ email }) => [email].some((item) => item.toLowerCase().includes(filter.toLowerCase())))
);
export { isLoadingSelector, errorSelector, usersSelector, phonebookUsers, usersFilter, memoizeUsersSelector };
