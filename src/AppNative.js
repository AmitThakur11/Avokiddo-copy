import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function AppNative() {
  const params = useParams();
  const ua = navigator.userAgent.toLowerCase();
  const [plattform, setPlattform] = useState(null);

  let checkMobilePlattform = useCallback(() => {
    const isAndroid = ua.includes("android");
    if (isAndroid) {
      setPlattform("android");
    }
    const isIPhone =
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i);
    if (isIPhone) {
      setPlattform("ios");
    }
  }, []);

  useEffect(() => {
    checkMobilePlattform();
  }, [checkMobilePlattform]);
  return (
    <div>
      <h1>Mini's</h1>
      <p>{plattform}</p>
      <p>{params.code}</p>
      <a href={`minis://app?code=${params.code}`}>Open</a>
    </div>
  );
}
