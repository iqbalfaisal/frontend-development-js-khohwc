import React from "react";

import { Images } from "../../resources";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="stats">
      <div className="content">
        <h1 className="title">Advanced Statistics</h1>
        <p className="desc">
          Track how your links are performing across the web with <br />
          our advanced statistics dashboard.
        </p>

        <div className="cards">
          <div className="card">
            <div className="card-icon">
              <img src={Images.recognition} alt="" role="presentation" />
            </div>
            <div className="card-title">Brand Recognition</div>
            <div className="card-body">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={Images.records} alt="" role="presentation" />
            </div>
            <div className="card-title">Detailed Records</div>
            <div className="card-body">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={Images.customizable} alt="" role="presentation" />
            </div>
            <div className="card-title">Fully Customizable</div>
            <div className="card-body">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
