import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getAllContacts = (state) => state.contacts.items;
export const getLoading = (state) => state.contacts.loading;
export const getError = (state) => state.contacts.error;

export const getFilteredContacts = createSelector([getAllContacts, getFilter], (contacts, filter) => {
  return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
});
