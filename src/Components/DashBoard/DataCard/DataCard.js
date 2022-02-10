import React from "react";
import { data } from "../../../data/OverviewData";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./DataCard.scss";

const DataCard = () => {
  return (
    <div className="card-with-data">
      {data.map((item) => {
        return (
          <>
            <div
              className={`data-card ${
                item.value === "+" && "data-card-positive"
              }`}
            >
              <div className="data-card-name">{item.name}</div>
              <div className="data-card-number">{item.number}</div>
              {item.value === "+" ? (
                <div className="data-card-value increase-value">
                  <ArrowDropUpIcon />
                  {item.amount}%
                </div>
              ) : (
                <div className="data-card-value decrease-value">
                  <ArrowDropDownIcon />
                  {item.amount}%
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DataCard;
