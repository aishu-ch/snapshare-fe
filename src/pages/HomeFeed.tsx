import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { checkIfValidToken } from "../utils/verifyToken";

const HomeFeed = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    checkIfValidToken();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default HomeFeed;
