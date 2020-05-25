import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Video from "./components/video/Video";
import About from "./components/about/About";
import FeaturedCustomers from "./components/featuredCustomers/FeaturedCustomers";

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <About />
      <FeaturedCustomers />
    </div>
  );
}

export default App;
