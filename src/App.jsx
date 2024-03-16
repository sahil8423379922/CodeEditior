import React, { useState } from "react";
import style from "./CSS/TextEditior.module.css";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import MarkdownPreview from "@uiw/react-markdown-preview";

import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeToPython from "./BlackBox";
const source = `
## MarkdownPreview

> todo: React component preview markdown text.
<h1>Welcome to React</h1>
`;

export default function App() {
  const [source, setsource] = useState();

  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "#fdffc3" }}>
        <Container>
          <div className={style.toolbar}>CODE EDITIOR</div>
          <textarea
            onChange={(event) => {
              setsource(event.target.value);
            }}
            className={style.container}
          ></textarea>
        </Container>

        <Container className="pt-4">
          <div className={style.toolbar}>CODE PREVIEWER</div>
          <MarkdownPreview
            className={style.container}
            source={source}
            style={{ padding: 16 }}
          />
        </Container>
      </div>
    </>
  );
}
