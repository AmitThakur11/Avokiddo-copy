import React from "react";

export default function IframeComp() {
  return (
    <div>
      <iframe
        style={{ width: "100%", height: 500 }}
        src="http://localhost:3000/project/testing?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5OCIsImVtYWlsIjoiZGluZXNoLmdhcmdAYXRpbmlzdHVkaW8uY29tIiwibmFtZSI6IkRpbmVzaCBHYXJnIiwiaWF0IjoxNzIwMDkyODYxLCJleHAiOjE3MjAwOTg4NjF9.IoCPLdeJ2bS5G0Z_jASt7170Q-ZA410yeNzzwt-6nfg"
      ></iframe>
    </div>
  );
}
