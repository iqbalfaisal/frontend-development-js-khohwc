import React from "react";
import { Images } from "../../resources";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <div className="content">
        <h1 className="title">More than just shorter links</h1>
        <p className="desc">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>

      <div className="img-container">
        <img src={Images.illustration} alt="" role="presentation" />
      </div>
    </div>
  );
}
