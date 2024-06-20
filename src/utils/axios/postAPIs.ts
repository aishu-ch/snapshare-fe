import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
const postURL = process.env.REACT_APP_BACKEND_POST_URL;

const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const getExplorePosts = async (userName: string) => {
  try {
    const data = await axios.get(`${baseURL}${postURL}/exploreposts`, {
      params: { userName: userName },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSubscribedPosts = async () => {
  try {
    const data = await axios.get(`${baseURL}${postURL}/getsubscribedposts`);
    // console.log(token)
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = async (caption: string, photo: string) => {
  try {
    const post = await axios.post(`${baseURL}${postURL}/createpost`, {
      caption: caption,
      photo: photo,
    });
    console.log(post);
    return post;
  } catch (err) {
    console.log(err);
  }
};

export const likePostToggle = async (postId: any) => {
  try {
    const response = await axios.post(
      `${baseURL}${postURL}/${postId}/togglelike`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const checkIfLikedByUser = async (postId: any) => {
  try {
    const checkLikes = await axios.get(
      `${baseURL}${postURL}/${postId}/checklikes`
    );
    return checkLikes.data;
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (postId: any) => {
  try {
    const deletePost = await axios
      .delete(`${baseURL}${postURL}/${postId}/deletepost`)
      .then((res) => console.log(res.data));
    return deletePost;
  } catch (err) {
    console.log(err);
  }
};

export const editPost = async (postId: any, caption: string) => {
  try {
    const editPost = await axios
      .put(`${baseURL}${postURL}/${postId}/editpost`, {
        caption: caption,
      })
      .then((res) => console.log(res));
    return editPost;
  } catch (err) {
    console.log(err);
  }
};

export const getPostById = async (postId: any) => {
  console.log(postId);
  try {
    const getPost = await axios.get(`${baseURL}${postURL}/post/${postId}`);
    return getPost.data;
  } catch (err) {
    console.log(err);
  }
};
