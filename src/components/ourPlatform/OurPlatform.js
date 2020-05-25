import React from "react";
import "./OurPlatform.css";

export default function OurPlatform() {
  return (
    <div className="platform-wrapper">
      <h3>Our Platform</h3>
      <h6 className="platform-desc">
        Hive has developed the industry’s first full-stack AI platform.
      </h6>
      <div className="platform-content">
        <div>
          <img
            src="https://thehive.ai/images/fe0dcb3.png"
            alt="1. Data Labeling"
            width="276"
            height="276"
          />
          <h6 style={{ color: "rgb(150, 153, 245)" }}>1. Data Labeling</h6>
          <p>
            We operate the world’s largest data labeling platform built for
            machine learning. This allows us to iterate on AI models faster than
            any other AI-as-a-Service company.
          </p>
        </div>
        <div>
          <img
            src="https://thehive.ai/images/4219437.png"
            alt="2. Model Development &amp; Deployment"
            width="276"
            height="276"
          />
          <h6 style={{ color: "rgb(50, 175, 124)" }}>
            2. Model Development & Deployment
          </h6>
          <p>
            We have developed 100+ AI models for customers, and our tools and
            frameworks allow us to develop and deploy models at a faster pace.
          </p>
        </div>
        <div>
          <img
            src="https://thehive.ai/images/3cc3fec.png"
            alt="3. Enterprise Applications"
            width="276"
            height="276"
          />
          <h6 style={{ color: "rgb(24, 142, 191)" }}>
            3. Enterprise Applications
          </h6>
          <p>
            We use our AI models to develop enterprise applications
            independently and often with partners. Our hallmark application is{" "}
          </p>
        </div>
        <div className="line"></div>
        <div className="half-circle" style={{ zIndex: "0" }}></div>
        <div className="half-circle-second" style={{ zIndex: "0" }}></div>
      </div>
      <div className="platform-background"></div>
    </div>
  );
}
