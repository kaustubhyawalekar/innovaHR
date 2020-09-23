import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div>
      <img
        id="schmoe"
        src={`https://joeschmoe.io/api/v1/${props.name}`}
        alt="Pic name might be modified"
      ></img>
    </div>
  );
};

export default Avatar;
