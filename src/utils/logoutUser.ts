import { useContext } from "react";
import { userContext } from "../context/auth";

export const LogoutUser = () => {
  const { dispatch } = useContext(userContext);
  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
