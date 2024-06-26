import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
const userURL = process.env.REACT_APP_BACKEND_USER_URL;

export const registerNewUser = async (
  email: string,
  fullName: string,
  userName: string,
  password: string
) => {
  try {
    await axios
      .post(`${baseURL}${userURL}/register`, {
        email: email,
        fullName: fullName,
        userName: userName,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        const token = response.data.token;
        // Save user json data to localStorage
        localStorage.setItem("token", JSON.stringify(token));
        window.location.reload();
        return response;
      });
  } catch (error) {
    console.log("This is the error", error);
  }
};

export const loginUser = async (userName: string, password: string) => {
  console.log(userName, password);
  console.log(`${baseURL}${userURL}/login`);
  try {
    await axios
      .post(`${baseURL}${userURL}/login`, {
        userName: userName,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        const token = response.data.token;
        // Save user json data to localStorage
        localStorage.setItem("token", JSON.stringify(token));
        window.location.reload();
        return response;
      });
  } catch (error) {
    console.log("This is the error", error);
  }
};

export const getUserbyUsername = async (userName: any) => {
  try {
    const fetchUser = await axios.get(`${baseURL}${userURL}/${userName}`);
    const data = fetchUser.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const followUser = async (userName: any) => {
  try {
    const res = await axios
      .post(`${baseURL}${userURL}/${userName}/follow`)
      return res
  } catch (error) {
    console.log(error);
  }
};

export const unfollowUser = async (userName: any) => {
  try {
    const res = await axios
      .post(`${baseURL}${userURL}/${userName}/unfollow`)
      return res
  } catch (error) {
    console.log(error);
  }
};

export const searchUsers = async (searchTerm: string) => {
  try {
    const response = await axios.post(`${baseURL}${userURL}/search`, {
      searchTerm,
    });
    const results = response.data;
    return results;
  } catch (error) {
    console.error(error);
  }
};
