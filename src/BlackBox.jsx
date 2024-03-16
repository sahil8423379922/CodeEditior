import React, { useState } from "react";

const WelcomeToPython = () => {
  const [heading, setHeading] = useState("Welcome to Python");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ textAlign: "center" }}>{heading}</h1>
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <p>
          Previewer
          <br />
          Editor
        </p>
        <pre>
          <code>
            <h1>{heading}</h1>
            Welcome to Python
          </code>
        </pre>
      </div>
    </div>
  );
};

export default WelcomeToPython;
