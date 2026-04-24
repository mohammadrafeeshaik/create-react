import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">Learning React JSX</h1>;

const HeadingComponent = () => <h1>React functional component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
