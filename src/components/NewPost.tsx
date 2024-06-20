import { useState } from "react";
import Uploader from "./Uploader";
import { createNewPost } from "../utils/axios/postAPIs";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewPost = ({ isOpen, setIsOpen }: Props) => {
  const [img, setImg] = useState("");
  const [addCaption, setAddCaption] = useState(false);
  const [caption, setCaption] = useState("");

  const imgData = async (data: string) => {
    await setImg(data);
  };

  const createPost = async (caption: string, img: string) => {
    createNewPost(caption, img).then((res) => {
      if (res?.status === 200) {
        window.location.reload();
      }
    });
  };

  return isOpen ? (
    <div className="bg-white rounded-2xl h-1/4 border w-[400px]">
      {addCaption ? (
        <h1 className="font-bold text-center py-2 border-b">Add a caption</h1>
      ) : (
        <h1 className="font-bold text-center py-2 border-b">
          Create a new post
          <span
            className="absolute font-bold right-3 hover:text-red-500 hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            X
          </span>
        </h1>
      )}
      <div className="h-full flex px-4">
        <div className="my-auto w-full w-96">
          {addCaption ? (
            <div className="">
              <textarea
                placeholder="Add a caption here"
                className="outline-none w-full placeholder:text-center"
                onChange={(e) => setCaption(e.target.value)}
              />
              <button
                className="bg-sky-600 text-center text-sm py-1 w-full rounded-sm text-white font-bold"
                onClick={() => createPost(caption, img)}
              >
                Upload
              </button>
            </div>
          ) : (
            <>
              {" "}
              <h1 className="text-xl tracking-wide text-center font-semibold">
                Upload photo and videos here
              </h1>
              <Uploader imgData={imgData} setAddCaption={setAddCaption} />
            </>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default NewPost;
