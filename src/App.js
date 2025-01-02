import "./App.scss";
import Invite from "./components/Invite/Invite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IframeComp from "./IframeComp";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundAndCancellation from "./RefundAndCancellation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Invite />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/refundAndPolicy" element={<RefundAndCancellation />} />
          <Route path="/app/:code" element={<Invite />} />
          <Route path="*" element={<Invite />} />
          <Route path="/iframe" element={<IframeComp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
