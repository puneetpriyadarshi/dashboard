import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftBar.scss";
import EditIcon from "@mui/icons-material/Edit";
import ArticleIcon from "@mui/icons-material/Article";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TableChartIcon from "@mui/icons-material/TableChart";
import PersonIcon from "@mui/icons-material/Person";
import ErrorIcon from "@mui/icons-material/Error";

const LeftBar = () => {
  return (
    <>
      <div className="left-bar">
        <div className="left-bar-header">
          <div className="logo">S</div>
          Shards DashBoard
        </div>
        <div className="left-bar-nav">
          <NavLink
            to="/dashboard"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            <div className="nav-item-icon">
              <EditIcon />
            </div>
            Blog Dashboard
          </NavLink>
          <NavLink
            to="/blog-posts"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            <div className="nav-item-icon">
              <ArticleIcon />
            </div>
            Blog Posts
          </NavLink>
          <NavLink
            to="add-posts"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            <div className="nav-item-icon">
              <NoteAddIcon />
            </div>
            Add New Posts
          </NavLink>
          <NavLink
            to="form-and-component"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            <div className="nav-item-icon">
              <FormatListBulletedIcon />
            </div>
            Forms & Components
          </NavLink>
          <NavLink
            to="table"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            <div className="nav-item-icon">
              <TableChartIcon />
            </div>
            Tables
          </NavLink>
          <NavLink
            to="profile"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            <div className="nav-item-icon">
              <PersonIcon />
            </div>
            User Profile
          </NavLink>
          <NavLink
            to="errors"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            <div className="nav-item-icon">
              <ErrorIcon />
            </div>
            Error
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
