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

  return isOpen ? (
    <div className="absolute bg-white rounded-2xl h-2/3 top-1/2 left-1/2 transform translate-x-full -translate-y-1/2 border">
      {addCaption ? (
        <h1 className="font-bold text-center py-2 border-b">Add a caption</h1>
      ) : (
        <h1 className="font-bold text-center py-2 border-b">
          Create a new post
          <span className="absolute font-bold right-3 hover:text-red-500 hover:cursor-pointer" onClick={() => setIsOpen(false)}>
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
                onClick={() => {
                  createNewPost(caption, img).then((res) => console.log(res));
                }}
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
