import "./App.css";
import { Footer, Intro, NavBar, Shorten, StartNow, Stats } from "./components";

function App() {
  return (
    <div className="root">
      <NavBar />
      <Intro />
      <Shorten />
      <Stats />
      <StartNow />
      <Footer />
    </div>
  );
}

export default App;
