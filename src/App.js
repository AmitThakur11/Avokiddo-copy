import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNative from "./AppNative";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AppNative />} />
          <Route path="/app/:plattform/:code" element={<AppNative />} />
          <Route path="*" element={<AppNative />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
