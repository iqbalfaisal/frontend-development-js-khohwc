import "./App.css";
import { Footer, Intro, NavBar, StartNow } from "./components";

function App() {
  return (
    <div className="root">
      <NavBar />
      <Intro />
      <StartNow />
      <Footer />
    </div>
  );
}

export default App;
