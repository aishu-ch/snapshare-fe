import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import HomeFeed from "./pages/HomeFeed";
import Login from "./pages/Login";
import { useUserContext } from "./utils/useUserContext";
import Profile from "./pages/Profile";
<<<<<<< HEAD
import Explore from "./pages/Explore";
=======
>>>>>>> 4f2141ad54fad770927019b5ff32a0e0c49a5ff1
import SinglePost from "./pages/SinglePost";

function App(): any {
  const { user } = useUserContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <HomeFeed /> : <Navigate to="/login" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/profile/:username" element={<Profile />} />
<<<<<<< HEAD
          <Route path="/explore" element={<Explore />} />
=======
>>>>>>> 4f2141ad54fad770927019b5ff32a0e0c49a5ff1
          <Route path="/post/:postid" element={<SinglePost />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
