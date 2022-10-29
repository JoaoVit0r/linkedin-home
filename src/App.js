import { HashRouter } from "react-router-dom";
import { Router } from "./Router";
import "./global.css";

function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
