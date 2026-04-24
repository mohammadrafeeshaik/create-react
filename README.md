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

React.createElement => React element-JS object => HTML element(render)
const heading = React.createElement("h1", { id: "heading" }, "Learning React");

JSX => React.createElement => React element-JS object => HTML element(render)
const jsxHeading = (<h1 id="heading">Learning React JSX</h1>);

# React component (2 types)

    - Class based components
    - Functional components (JS functions which returns some piece of JSX / React element)
    Component composition (component within a component)
