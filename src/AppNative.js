import React from "react";
import { useParams } from "react-router-dom";
export default function AppNative() {
  const params = useParams();
  return (
    <div>
      <h1>Mini's</h1>
      <p>{params.code}</p>
      <a href={`minis://app?code=${params?.code}`}>Open</a>
    </div>
  );
}
