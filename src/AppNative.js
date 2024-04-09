import React from "react";
import { Link } from "react-router-dom";
export default function AppNative() {
  return (
    <div>
      <h1>Mini's</h1>
      <a href="itms-apps://play.google.com/store/apps">
        <button onClick={() => {}}>Play Store</button>
      </a>
      <a href="itms-apps://apps.apple.com/app">
        <button onClick={() => {}}>App Store</button>
      </a>
    </div>
  );
}
