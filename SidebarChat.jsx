import React from "react";
import Avatar from "./Avatar.jsx";
import "./SidebarChat.css";

const SidebarChat = () => {
  const seed = Math.random() * 50000;
  console.log(seed);
  return (
    <div class="SidebarChat">
      <Avatar name={seed[0]} />
      <div className="text">
        <h4>room nam</h4>
        <h6>last msg</h6>
      </div>
    </div>
  );
};

export default SidebarChat;
