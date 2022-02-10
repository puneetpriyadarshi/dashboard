import React from "react";
import DataCard from "../../Components/DashBoard/DataCard/DataCard";
import OverViewGraph from "../../Components/DashBoard/OverviewGraph/OverViewGraph";
import UserGraph from "../../Components/DashBoard/UserGraph/UserGraph";
import "./DashBoard.scss";

const DashBoard = () => {
  return (
    <div>
      <DataCard />
      <div className="images-graphs">
        <OverViewGraph />
        <UserGraph />
      </div>
    </div>
  );
};

export default DashBoard;
