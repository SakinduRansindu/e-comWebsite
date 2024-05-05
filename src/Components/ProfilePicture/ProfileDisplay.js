import React from "react";
import ProfilePictureDefault from "../../Images/user.png";
import { AuthData } from "../AuthWrapper/AuthWrapper";

export default function ProfileDisplay({
  profilePicUrl,
  name,
  overwriteClassName,
}) {
  const { user } = AuthData();
  if (user.isLogedIn) {
    return (
      <div
        className={
          "d-flex align-items-center ms-auto mx-2 dark2 rounded " + overwriteClassName
        }
      >
        <img
          src={profilePicUrl || ProfilePictureDefault}
          style={{ width: "35px", height: "35px", backgroundClip: "center" }}
          alt="Profile picture"
          className="rounded-circle border col mx-1 "
        />
        <p className="d-none my-0 mx-1 d-sm-inline d-lg-inline col">{name}</p>
      </div>
    );
  } else {
    return null;
  }
}
