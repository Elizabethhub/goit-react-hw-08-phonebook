import axios from "axios";

const baseURL = `https://phonebook-5b0f2-default-rtdb.firebaseio.com`;

export const getUsers = async () => {
  try {
    const response = await axios.get(baseURL + "/phonebookUsers.json");
    const res = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
    return res;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

export const addUser = async (user) => {
  try {
    const response = await axios.post(baseURL + "/users.json", user);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(baseURL + `/phonebookUsers/${id}.json`);
  } catch (error) {
    throw new Error(error);
  }
};
