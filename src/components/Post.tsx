import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPostComments } from "../utils/axios/commentAPIs";
import { checkIfLikedByUser, likePostToggle } from "../utils/axios/postAPIs";
import { getProfileUsernameandProfilePic } from "../utils/axios/profileAPIs";
import CommentForm from "./CommentForm";
import EditPost from "./EditPost";
import SingleComment from "./SingleComment";
import { CommentIcon } from "./icons/Comment";
import { FavoriteSelected, FavoriteUnselected } from "./icons/Like";

type Props = {
  isOnFeed: boolean;
  post: any;
};

const Post = ({ isOnFeed, post }: Props) => {
  const [profile, setProfile] = useState({
    userName: "",
    profilePic: "",
  });

  const formattedDate = dayjs(post.createdAt).format(`MMMM D`);

  const [isLiked, setIsLiked] = useState(false);
  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [likesList, setLikesList] = useState(false);
  const [comments, setComments] = useState<any>([]);
  const [commentsRefresh, setCommentsRefresh] = useState(true);

  const fetchData = () => {
    checkIfLikedByUser(post._id).then((res) => {
      setIsLiked(res);
    });
    getProfileUsernameandProfilePic()
      .then((res) => setProfile(res))
      .catch((err) => console.log(err));
    if (commentsRefresh) {
      getPostComments(post._id).then((res) => {
        // console.log("getPostComments: ", res);
        setComments(res[0].comments);
        setCommentsRefresh(false);
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [commentsRefresh, isLiked]);

  const likePost = async (id: string) => {
    const res = await likePostToggle(id);
    setIsLiked(res);
  };
  const navigate = useNavigate();

  const likeList = post.likes;
  const likes = () => {
    if (likeList.length === 1) {
      return (
        <span
          className="font-semibold cursor-pointer pl-1"
          onClick={() => {
            navigate(`/profile/${likeList[0].userName}`);
          }}
        >
          {likeList[0].userName}
        </span>
      );
    } else {
      return (
        <span className="font-semibold cursor-pointer pl-1">
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setLikesList(!likesList);
            }}
          >
            <h1>
              <span className="font-semibold"></span>
              {likeList.length} people
            </h1>
            <div
              className={
                likesList
                  ? `absolute bg-white rounded-lg border border-gray-100 w-64`
                  : `absolute invisible null`
              }
            >
              {likeList.map((liker: any) => {
                return (
                  <>
                    <div className="flex justify-between hover:bg-gray-50">
                      <Link
                        key={liker._id}
                        to={`/profile/${liker.userName}`}
                        className="py-1 "
                      >
                        <div className="flex gap-4">
                          <div className="my-auto">
                            <img
                              className="w-[24px] h-[24px] rounded-full ml-4"
                              src={liker.profilePic}
                            />
                          </div>
                          <div>
                            <h1 className="font-semibold text-sm">
                              {liker.userName}
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </span>
      );
    }
  };

  return isOnFeed ? (
    <div
      key={post._id}
      className="border rounded-xl relative w-[512px] mx-auto"
    >
      <div className="flex justify-between border-b ">
        <div>
          <Link
            to={`/profile/${post.postedBy.userName}`}
            className="flex gap-3 my-auto py-3 pl-4"
          >
            <img
              className="w-10 h-10 rounded-full"
              src={post.postedBy.profilePic}
              alt="post"
            />
            <h1 className="my-auto font-semibold">{post.postedBy.userName}</h1>
          </Link>
        </div>
        {post.postedBy.userName === profile.userName ? (
          <div className="my-2 mr-4">
            <h1
              className="text-3xl font-semibold cursor-pointer"
              onClick={() => setEditModalIsOpen(!editModalIsOpen)}
            >
              ...
            </h1>
            <EditPost
              isOpen={editModalIsOpen}
              postId={post._id}
              postCaption={post.caption}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <img
        className="w-full h-[512px] object-fill border-b"
        src={post.photo}
        alt="post"
      />
      <div className="flex justify-between mx-4 pt-4">
        <div className="flex gap-3">
          <div onClick={() => likePost(post._id)}>
            {isLiked ? <FavoriteSelected /> : <FavoriteUnselected />}
          </div>
          <div onClick={() => setCommentIsOpen(!commentIsOpen)}>
            <CommentIcon />
          </div>
        </div>
      </div>
      <div className="flex ml-4 pt-4">
        <h1 className={likeList.length === 0 ? `hidden` : `flex`}>
          Liked by<span className="flex">{likes()}</span>
        </h1>
      </div>
      <div className="ml-4 py-3">
        <div className="flex gap-2">
          <Link to={`/profile/${post.postedBy.userName}`}>
            <h2 className="font-semibold">{post.postedBy.userName}</h2>
          </Link>
          <h2>{post.caption}</h2>
        </div>
        <CommentForm
          postId={post._id}
          isOpen={commentIsOpen}
          setOpen={setCommentIsOpen}
          setCommentsRefresh={setCommentsRefresh}
        />
        {comments.map((comment: any) => {
          return (
            <SingleComment
              key={comment._id}
              comment={comment}
              currentUser={profile.userName}
              postid={post._id}
            />
          );
        })}
        <h2 className="text-xs text-gray-500 mt-2">{formattedDate}</h2>
      </div>
    </div>
  ) : (
    <div className="mx-auto">
      <div className="hover:bg-black relative">
        <div
          key={post._id}
          className="my-6 cursor-pointer hover:opacity-25"
          onClick={() => navigate(`/post/${post._id}`)}
        >
          <img className="h-[256px] w-[256px]" src={post.photo} alt="post" />
        </div>
      </div>
    </div>
  );
};

export default Post;
