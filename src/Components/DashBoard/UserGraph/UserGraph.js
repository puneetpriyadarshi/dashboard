import React from "react";
import Bar from "../../../media/bar.png";

const UserGraph = () => {
  return (
    <div className="user-graph" style={{ padding: "40px" }}>
      <img src={Bar} alt="graph" style={{ width: "100%", height: "420px" }} />
    </div>
  );
};

export default UserGraph;
