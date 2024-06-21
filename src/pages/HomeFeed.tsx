import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import { getSubscribedPosts } from "../utils/axios/postAPIs";
import { checkIfValidToken } from "../utils/verifyToken";

const HomeFeed = () => {
  const [post, setPost] = useState([]);
  const [likesRefresh, setLikesRefresh] = useState(false);

  useEffect(() => {
    checkIfValidToken();
    getSubscribedPosts().then((res) => {
      setPost(res);
      console.log(res);
    });
    setLikesRefresh(false)
  }, [likesRefresh]);

  return (
    <div className="flex">
      <Navbar />
      <div className="mx-auto">
        {post.map((eachPost) => {
          return (
            <div className="pt-4 pb-6">
              <Post isOnFeed={true} post={eachPost} setLikesRefresh={setLikesRefresh}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeFeed;
