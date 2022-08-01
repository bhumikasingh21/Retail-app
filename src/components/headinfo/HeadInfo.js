import React from "react";
import "./HeadInfo.css";

const HeadInfo = () => {
  return (
  
      <div className="info-container">
        <div className="info-left">
          <div className="info-left1">
            <span style={{ cursor: "pointer" }}>☏</span> 3692-5847{" "}
          </div>
          <div className="info-left1">
            {" "}
            <span style={{ cursor: "pointer" }}>✉</span> support@retail-app.com
          </div>
        </div>
        <div className="info-right">
          <div className="info-right1">Need Help? </div>
        </div>
      </div>
   
  );
};

export default HeadInfo;
