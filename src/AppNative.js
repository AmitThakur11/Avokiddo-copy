import React from "react";
export default function AppNative() {
  return (
    <div>
      <h1>Mini's</h1>
      <a href="market://play.google.com/store/apps">
        <button onClick={() => {}}>Play Store</button>
      </a>
      <a href="itms-apps://play.google.com/store/apps">
        <button onClick={() => {}}>App Store</button>
      </a>
    </div>
  );
}
