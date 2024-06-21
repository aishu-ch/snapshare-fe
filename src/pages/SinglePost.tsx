import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import { getPostById } from "../utils/axios/postAPIs";

const SinglePost = () => {
  const { postid } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likesRefresh, setLikesRefresh] = useState(false);

  useEffect(() => {
    getPostById(postid)
      .then((res: any) => (post !== res ? setPost(res) : ""))
      .then((res) => setLoading(false));
    setLikesRefresh(false);
  }, [likesRefresh]);

  return (
    <div className="flex">
      <Navbar />
      <div className="my-auto mx-auto w-1/2 h-2/3">
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <Post
              isOnFeed={true}
              post={post}
              setLikesRefresh={setLikesRefresh}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
