import React from "react";
import Graph from "../../../media/overview.png";

const OverViewGraph = () => {
  return (
    <div
      className="overview-graph"
      style={{ padding: "40px", marginLeft: "-20px" }}
    >
      <img src={Graph} alt="graph" style={{ width: "100%", height: "420px" }} />
    </div>
  );
};

export default OverViewGraph;
