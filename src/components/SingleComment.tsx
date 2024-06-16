import { useNavigate } from "react-router";
import { deleteComment } from "../utils/axios/commentAPIs";
import { ClearIcon } from "./icons/Clear";

type Props = {
  postid: any;
  comment: any;
  currentUser: string;
};

export default function SingleComment({ postid, comment, currentUser }: Props) {
  const navigate = useNavigate();

  const handleCommentDelete = async () => {
    await deleteComment(postid, comment._id).then((res) =>
      window.location.reload()
    );
  };

  return (
    <div key={comment._id} className="flex text-sm gap-2 justify-between">
      <div className="flex flex-row space-x-2">
        <h1
          onClick={() => navigate(`profile/${comment.postedBy.userName}`)}
          className="font-semibold cursor-pointer"
        >
          {comment.postedBy.userName}
        </h1>
        <h1 className="">{comment.comment}</h1>
      </div>
      {comment.postedBy.userName === currentUser ? (
        <div>
          <button onClick={handleCommentDelete}>
            <ClearIcon />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
