import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-text">
        <h3>
          <div>Harness the power of Hive’s</div>
          <div>
            <span style={{ fontWeight: "bold" }}>AI-as-a-Service</span> platform
          </div>
        </h3>
        <div className="underline"></div>
        <h6>
          Hive is the industry's first full-stack AI company, offering solutions
          ranging from data labeling to model & application development. We have
          built a technology & services platform to solve critical challenges
          facing enterprises, enabling every organization to do more with the
          power of AI.
        </h6>
      </div>
    </div>
  );
}
