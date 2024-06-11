import React from "react";
import { useNavigate } from "react-router";
import { LogoutUser } from "../utils/logoutUser";

type Props = {
  isOpen: boolean;
};

const MoreModal = ({ isOpen }: Props) => {
  const { logout } = LogoutUser();
  const navigate = useNavigate();

  return (
    <div>
      {isOpen ? (
        <div>
          <ul onClick={() => navigate("/accounts/edit")}>
            <h1>Edit Profile</h1>
          </ul>
          <ul onClick={logout}>
            <h1>Log out</h1>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MoreModal;
