import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Intro from "./components/Intro";
import Program from "./components/Program";
import Prices from "./components/Prices";
import Video from "./components/Video";
import { courseFeatures } from "./components/tarrif-features";

function App() {
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
