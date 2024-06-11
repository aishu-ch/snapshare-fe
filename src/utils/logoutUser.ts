import { useContext } from "react";
import { userContext } from "../context/auth";

export const LogoutUser = () => {
  const { dispatch } = useContext(userContext);
  const logout = () => {
    // Remove stored token and dispatch logout to context, then navigate
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
