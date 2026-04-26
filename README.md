# Learning React from Akshay Saini

# Package

    package.json have APPROXIMATE dependency versions
    package-lock.json have EXACT dependency version

# caret/tilde

    ^ Allows minor/patch updates
    ~ Allows patch updates

# parcel (npm i -D parcel)

    npx parcel index.html (dev)
    npx parcel build index.html (prod)

    - Dev build
    - Local server
    - HMR (Hot Module Replacement)
    - File watching a/g written in c++
    - Caching (Faster builds)
    - Image optimization
    - Minification
    - Bundling
    - Compressing
    - Content Hashing
    - Code Splitting
    - Differential bundling (Support older browsers)
    - Diagnostics
    - Error Handling
    - HTTPs
    - Tree Shaking (removes unused code)
    - Different dev and build bundles

# browserslist (browserslist.dev) support for browsers

"browserslist": [
"last 2 versions"
]

# npm scripts

"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html"
}

# JSX (Transplied before it reaches JS engine)

import React from "react";
import ReactDOM from "react-dom/client";

React.createElement => React element-JS object => HTML element(render)
const heading = React.createElement("h1", { id: "heading" }, "Learning React");

JSX => React.createElement => React element-JS object => HTML element(render)
const jsxHeading = (<h1 id="heading">Learning React JSX</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

# React component (2 types)

    - Class based components
    - Functional components (JS functions which returns some piece of JSX / React element)
    Component composition (component within a component)

# Exports/Imports

    - Default
    - Named

    - Default
        - export default Header;
        - import Header from './components/Header';

    - Named
        - export const Header = () => {};
        - import {Header} from './components/Header';

# Hooks

    Hooks are normal JS utility functions given by React
        - useState()    super powerful state variables given by React
        - useEffect()

import { useState } from "react";

import { resList } from "../utils/mockData";

const Body = () => {
const [listOfRes, setListOfRes] = useState(resList);

    const btnFilter = () =>
    setListOfRes(listOfRes.filter((res) => res.info.avgRating > 4));

}
