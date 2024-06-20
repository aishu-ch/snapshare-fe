import { useState, useEffect } from "react";
import { getExplorePosts } from "../utils/axios/postAPIs";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import { getProfileUsernameandProfilePic } from "../utils/axios/profileAPIs";

export default function Explore() {
  const [userName, setUserName] = useState("");

  const [post, setPost] = useState([]);

  useEffect(() => {
    getProfileUsernameandProfilePic()
      .then((res) => {
        console.log(res);
        setUserName(res.userName);
        getExplorePosts(res.userName).then((res) => {
          setPost(res);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="grid grid-cols-3">
        {post.map((eachPost) => {
          return <Post isOnFeed={false} post={eachPost} />;
        })}
      </div>
    </div>
  );
}
