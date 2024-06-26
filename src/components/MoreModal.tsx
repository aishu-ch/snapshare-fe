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
        <div className="w-full h-fit bg-white absolute top-12 rounded-md shadow text-[14pt]">
          <ul
            className="pl-2 py-2 flex gap-4 hover:bg-gray-50 hover:cursor-pointer border-b"
            onClick={() => navigate("/accounts/edit")}
          >
            <h1>Edit Profile</h1>
          </ul>
          <ul
            className="pl-2 py-2 flex gap-4 hover:bg-gray-50 hover:cursor-pointer"
            onClick={logout}
          >
            <h1 className="invisible md:visible">Log out</h1>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MoreModal;
