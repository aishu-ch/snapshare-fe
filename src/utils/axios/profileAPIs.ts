import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
const profileURL = process.env.REACT_APP_BACKEND_PROFILE_URL;

const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const getProfileUsernameandProfilePic = async () => {
  try {
    const data = await axios.get(`${baseURL}${profileURL}/getprofiledata`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProfileId = async () => {
  try {
    const data = await axios.get(`${baseURL}${profileURL}/getprofiledata`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
