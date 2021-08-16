import axios from "axios";
import {
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from "./contactActions";

axios.defaults.baseURL = "https://phonebook-5b0f2-default-rtdb.firebaseio.com"; //users/{userId}/contacts.json?auth={idToken}

export const fetchContacts = () => async (dispatch, getState) => {
  dispatch(getContactRequest());
  const {
    auth: {
      tokens: { idToken },
    },
    user: { localId }, //state.auth.localId \ idToken
  } = getState();

  try {
    const { data } = await axios.get(`/users/${localId}/contacts.json?auth=${idToken}`);

    dispatch(getContactSuccess(data ? Object.keys(data).map((key) => ({ id: key, ...data[key] })) : []));
  } catch (error) {
    dispatch(getContactError(error.message));
  }
};
export const addContact = (contact) => async (dispatch, getState) => {
  dispatch(addContactRequest());
  const {
    auth: {
      tokens: { idToken },
    },
    user: { localId },
  } = getState();
  try {
    const { data } = await axios.post(`/users/${localId}/contacts.json?auth=${idToken}`, contact);
    dispatch(addContactSuccess({ id: data.name, ...contact }));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const deleteContact = (id) => async (dispatch, getState) => {
  dispatch(deleteContactRequest());
  const {
    auth: {
      tokens: { idToken },
    },
    user: { localId },
  } = getState();
  try {
    await axios.delete(`/users/${localId}/contacts/${id}.json?auth=${idToken}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
