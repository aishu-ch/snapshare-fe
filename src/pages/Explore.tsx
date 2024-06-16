import { useState, useEffect } from "react";
import { getAllPosts } from "../utils/axios/postAPIs";
import Post from "../components/Post";
import Navbar from "../components/Navbar";

export default function Explore() {
    
const [post, setPost] = useState([]);

useEffect(() => {
  getAllPosts().then((res) => {
    setPost(res);
    console.log(res);
  });
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
