import {useState } from "react";
import { useNavigate } from "react-router";
import { registerNewUser } from "../utils/axios/userAPIs";

const Register = () => {
  const navigate = useNavigate();

  const [registrationData, setRegistrationData] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
  });

  const changeHandler = (e: any) => {
    setRegistrationData((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <div>
        <h1>SnapShare</h1>
        <h2>Sign up to see photos and videos from your friends.</h2>
        <div>
          <form>
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              onChange={changeHandler}
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              onChange={changeHandler}
              required
            />
            <input
              type="text"
              placeholder="Username"
              name="userName"
              onChange={changeHandler}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
              required
            />
            <button
              type="button"
              onClick={() =>
                registerNewUser(
                  registrationData.email,
                  registrationData.fullName,
                  registrationData.userName,
                  registrationData.password
                )
              }
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div>
        <h1>
          Have an account?{" "}
          <span onClick={() => navigate("/login")}>Log in</span>
        </h1>
      </div>
    </div>
  );
};

export default Register;
