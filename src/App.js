import React, { useEffect } from "react";
import "./App.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import Intro from "./components/Intro";
import Program from "./components/Program";
import Prices from "./components/Prices";
import Video from "./components/Video";
import { courseFeatures } from "./components/tarrif-features";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 50,
    });
  }, []);
  return (
    <div className="App">
      <Intro />
      <Program />
      <Video videoID={""} />
      <Prices features={courseFeatures} />
    </div>
  );
}

export default App;
