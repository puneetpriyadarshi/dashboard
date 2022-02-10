import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import "./TopNavigation.scss";
const TopNavigation = () => {
  return (
    <>
      <div className="top-navigation">
        <div className="top-nav-search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search for something..."
            onChange={() => {}}
          />
        </div>
        <div className="top-nav-notification">
          <Badge
            badgeContent={2}
            color="primary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <NotificationsIcon />
          </Badge>
        </div>
        <div className="top-nav-profile">
          <PersonIcon />

          <div className="name">Sierra Brooks</div>
        </div>
      </div>
    </>
  );
};

export default TopNavigation;
