import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import HomeFeed from "./pages/HomeFeed";
import Login from "./pages/Login";
import { useUserContext } from "./utils/useUserContext";

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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;