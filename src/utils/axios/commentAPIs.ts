import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
const commentURL = process.env.REACT_APP_BACKEND_COMMENT_URL;

const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const addNewComment = async (postid: any, comment: string) => {
  try {
    console.log(`${baseURL}${commentURL}/${postid}/addcomment`);
    const addComment = await axios.post(
      `${baseURL}${commentURL}/${postid}/addcomment`,
      {
        comment: comment,
      }
    );
    return addComment;
  } catch (err) {
    console.log(err);
  }
};

export const getPostComments = async (postid: any) => {
  try {
    const getComments = await axios.get(
      `${baseURL}${commentURL}/${postid}/getcomments`
    );
    return getComments.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async (postid: any, commentId: any) => {
  try {
    const deleteComment = await axios
      .delete(`${baseURL}${commentURL}/${postid}/${commentId}/deletecomment`)
      .then((res) => console.log(res.data));
    return deleteComment;
  } catch (error) {
    console.log(error);
  }
};
