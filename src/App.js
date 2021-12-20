import "./assets/styles/style.scss";
import Performance from "./Components/Performance/Performance";
import Fund from "./Components/Fund/Fund";
import Manager from "./Components/Manager/Manager";
import Time from "./Components/Time/Time";

function App() {
  return (
    <div className="App">
      <div className="inner">
        <div className="first-container">
          <Performance />
          <Fund />
        </div>
        <div className="second-container">
          <Manager />
          <Time />
        </div>
      </div>
    </div>
  );
}

export default App;
