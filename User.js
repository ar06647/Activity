import React from "react";

const User = ({ user }) => {
  const { firstName, lastName, school, email, profilePicture } = user;

  const classLevelColor = user.classLevel === "Freshman" ? "green" : "black";

  return (
    <div className="user">
      <div className="profile-picture">
        <img src={profilePicture} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="user-details">
        <ul>
          <li>
            <strong>Full Name:</strong> {firstName} {lastName}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>School:</strong> {school}
          </li>
          <li>
            <strong>Class Level:</strong>{" "}
            <span style={{ color: classLevelColor }}>
              {user.classLevel}
            </span>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default User;
