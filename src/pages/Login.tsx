import { useState } from "react";
import { loginUser } from "../utils/axios/userAPIs";
import { useNavigate } from "react-router";
import { useUserContext } from "../utils/useUserContext";

const Login = () => {
  const { dispatch } = useUserContext();
  const token = localStorage.getItem("token");

  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const changeHandler = (e: any) => {
    setLoginData((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const navigate = useNavigate();

  return (
    <div className="w-[396px] mx-auto h-screen">
      <div className="border my-8 pb-6 bg-white border-gray-300">
        <h1 className="text-center text-3xl my-4 py-6">SnapShare</h1>
        <form className="flex flex-col gap-4">
          <input
            placeholder="Username"
            className="bg-gray-50 mx-8 py-1 placeholder:text-xs focus:outline-1 focus:outline-gray-400 placeholder:text-gray-400 border rounded-sm p-2"
            type="text"
            name="userName"
            onChange={changeHandler}
            required
          />
          <input
            placeholder="Password"
            className="bg-gray-50 mx-8 py-1 placeholder:text-xs focus:outline-1 focus:outline-gray-400 placeholder:text-gray-400 border rounded-sm p-2"
            type="password"
            name="password"
            onChange={changeHandler}
            required
          />

          <button
            className="bg-sky-500 text-center mx-8 text-sm py-1 rounded-sm text-white font-bold"
            type="button"
            onClick={() => {
              loginUser(loginData.userName, loginData.password);
              dispatch({ type: "LOGIN", payload: token });
            }}
          >
            Log in
          </button>
        </form>
      </div>
      <div className="border bg-white text-center py-4 border-gray-300">
        <h1 className="text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-sky-500 font-bold cursor-pointer"
          >
            Sign up
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Login;
