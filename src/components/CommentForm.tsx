import React, { useState } from "react";
import { addNewComment } from "../utils/axios/commentAPIs";

type Props = {
  isOpen: boolean;
  postId: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCommentsRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentForm = ({
  isOpen,
  postId,
  setOpen,
  setCommentsRefresh,
}: Props) => {
  const [comment, setComment] = useState("");

  const sendComment = async (postId: string, comment: string) => {
    const res = await addNewComment(postId, comment);
    console.log(res);
    if (res?.status === 200) {
      setOpen(!isOpen);
      setCommentsRefresh(true);
    }
  };
  return (
    <div className={isOpen ? `pr-4 pt-4 flex relative` : `hidden`}>
      <input
        onChange={(e) => setComment(e.target.value)}
        className="border pb-1 border-none bg-gray-50 w-full placeholder:text-sm outline-none text-sm overflow-x-scroll mr-20"
        placeholder="Add a comment..."
      />
      <button
        type="button"
        onClick={() => sendComment(postId, comment)}
        className="absolute bottom-0 right-6 border bg-sky-500 hover:bg-sky-600 px-2 py-1 rounded-lg text-xs text-white font-bold border-gray-300"
      >
        Send
      </button>
    </div>
  );
};

export default CommentForm;
