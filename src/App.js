import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href("minis://abc?ab=100");
  });
  return (
    <div className="App">
      <h1>Mini's</h1>
    </div>
  );
}

export default App;
