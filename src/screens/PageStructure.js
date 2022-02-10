import React from "react";
import Heading from "../Components/Basics/Heading/Heading";
import LeftBar from "../Components/Basics/LeftBar/LeftBar";
import TopNavigation from "../Components/Basics/Top Nav/TopNavigation";
import "./common.scss";

const PageStructure = (props) => {
  return (
    <div className="common-structure">
      <div className="left-bar">
        <LeftBar />
      </div>
      <div className="right-body">
        <TopNavigation />
        <Heading title={props.title} subtitle={props.subtitle} />
        {props.children}
      </div>
    </div>
  );
};

export default PageStructure;
