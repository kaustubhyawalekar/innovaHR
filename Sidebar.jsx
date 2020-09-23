import React from "react";
import Avatar from "./Avatar.jsx";
import SidebarChat from "./SidebarChat.jsx";
import { IconButton } from "@material-ui/core";
import "./Sidebar.css";
import Icon from "@material-ui/core/Icon";
import ChatIcon from "@material-ui/icons/Chat";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

const Sidebar = () => {
  return (
    <div className="entire__sidebar">
      <div className="sidebar__header">
        <div className="left_icon">
          <IconButton>
            <Avatar name="raghav" />
          </IconButton>
        </div>
        <div className="3right_icon">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <Icon>starIcon</Icon>
          </IconButton>
          <IconButton>
            <Button variant="contained" color="primary">
              Hi
            </Button>
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search"></div>
      <div className="sidebar__searchContainer">
        <SearchOutlined />
        <input type="text" placeholder="Search or start new chat" />
      </div>

      <div className="sidebar__chatEntire">
        {/* <SidebarChat addNewChat />
        {rooms &&
          rooms.map((room) => (
            <SidebarChat key={room.id} name={room.data.name} id={room.id} />
          ))} */}
        <div className="sidebar__chat">
          <h2>
            <SidebarChat addNewChat />
          </h2>
        </div>
        <div className="sidebar__chat">
          <h2>
            <SidebarChat addNewChat />
          </h2>
        </div>
        <div className="sidebar__chat">
          <h2>
            <SidebarChat addNewChat />
          </h2>
        </div>
        <div className="sidebar__chat">
          <h2>
            <SidebarChat addNewChat />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
