import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <div className="video-wrapper">
      <video
        autoplay="autoplay"
        loop="loop"
        preload="metadata"
        className="video"
        poster="https://thehive.ai/images/7ede321.jpg"
        style={{
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "-5",
        }}
      >
        <source src="https://thehive.ai/images/dac47bb.mp4" type="video/mp4" />
      </video>
      <div className="text-wrapper">
        <div>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyODAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCAyODAgNzAiPgogICAgPGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNODkuOTg1IDEzLjkzNWgxMS43NTF2MTguNDhoMTguMTczdi0xOC40OGgxMS43NTF2NDUuMjk2SDExOS45MVY0MS44NDloLTE4LjE3M3YxNy4zODJoLTExLjc1VjEzLjkzNXptNjIuMyAwaDExLjc1MXY0NS4yOTZoLTExLjc1MVYxMy45MzV6bTI3Ljg4IDBoMTIuNjVsMTEuMjM4IDMyLjc2IDExLjMwMi0zMi43NmgxMi4wNzJsLTE3LjU5NSA0NS4yOTZoLTEyLjJsLTE3LjQ2Ni00NS4yOTZ6bTYzLjM5MiAwaDM1LjUxdjkuNDM0aC0yMy43NnY4LjQ2NWgyMS40NDh2OS4zN2wtMjEuNDQ3LjA2NHY4LjUyOWgyNC40MDF2OS40MzRoLTM2LjE1MlYxMy45MzV6TTMyLjEwNyAwYTguMDI3IDguMDI3IDAgMCAxIDguMDI3IDguMDI3djUzLjk0NmE4LjAyNyA4LjAyNyAwIDEgMS0xNi4wNTQgMFY4LjAyN0E4LjAyNyA4LjAyNyAwIDAgMSAzMi4xMDcgMHpNOC4wMjcgMTMuNDYyYTguMDI3IDguMDI3IDAgMCAxIDguMDI3IDguMDI2djI3LjAyNGE4LjAyNyA4LjAyNyAwIDAgMS0xNi4wNTQgMFYyMS40ODhhOC4wMjcgOC4wMjcgMCAwIDEgOC4wMjctOC4wMjZ6bTQ4LjE2IDBhOC4wMjcgOC4wMjcgMCAwIDEgOC4wMjcgOC4wMjZ2MjcuMDI0YTguMDI3IDguMDI3IDAgMCAxLTE2LjA1MyAwVjIxLjQ4OGE4LjAyNyA4LjAyNyAwIDAgMSA4LjAyNi04LjAyNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
            className="jss479"
          />
        </div>
        <div>
          <h2>
            INTRODUCING THE WORLD’S FIRST
            <br></br>
            <span className="jss585">FULL-STACK AI COMPANY</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
