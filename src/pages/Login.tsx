import React, { useState } from "react";
import { loginUser } from "../utils/axios/userAPIs";
import { useNavigate } from "react-router";
import { useUserContext } from "../utils/useUserContext";

const Login = () => {
  const { dispatch } = useUserContext();
  const token = localStorage.getItem("token");

  const [loginData, setLoginData] = useState({
    // email: '',
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
    <div>
      <div>
        <h1>Instaclone</h1>
        <form>
          <input
            placeholder="Username or email"
            type="text"
            name="userName"
            onChange={changeHandler}
            required
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={changeHandler}
            required
          />

          <button
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
      <div>
        <h1>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Sign up</span>
        </h1>
      </div>
    </div>
  );
};

export default Login;
