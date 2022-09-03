import "./App.css";
import { Footer, Intro, NavBar, StartNow, Stats } from "./components";

function App() {
  return (
    <div className="root">
      <NavBar />
      <Intro />
      <Stats />
      <StartNow />
      <Footer />
    </div>
  );
}

export default App;
