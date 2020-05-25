import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Video from "./components/video/Video";
import About from "./components/about/About";
import FeaturedCustomers from "./components/featuredCustomers/FeaturedCustomers";
import OurPlatform from "./components/ourPlatform/OurPlatform";

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <About />
      <FeaturedCustomers />
      <OurPlatform />
    </div>
  );
}

export default App;
