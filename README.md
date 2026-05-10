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

    JSX => React.createElement => React element-JS object => HTML element(render);

    const jsxHeading = (&lt;h1&gt; id="heading">Learning React JSX&lt;/h1&gt;);

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
        - useEffect()   takes two arguments.
            1. Callback fn () => {}
            2. Dependancy array []
                - If no dependancy array, useEffect is called on every render
                - If dependancy array is empty [], useEffect is called on inital render and only once
                - If dependancy array is any variable, useEffect is called everytime when the variable changes

## useState()

Whenever a state variable updates, React will re-renders the component

    import { useState } from "react";

    import { resList } from "../utils/mockData";

    const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList);

    const btnFilter = () =>
    setListOfRes(listOfRes.filter((res) => res.info.avgRating > 4));

}

## useEffect()

    import {useEffect} from 'react';

    const Body = () => {
    useEffect(() => {}, [])
    }

# Reconciliation a/g (React Fiber)

    - Diff a/g (It finds the difference between two virtual DOMs)
    - Virtual DOM -> It is a representation of actual DOM

# React router dom

    - createBrowserRouter   =>  is a named import from react-router-dom
                                takes a list of objects which contains path and element

    - RouterProvider        =>  is a named import from react-router-dom
                                is a component which takes router configuration in router prop

    - useRouteError         =>  is a named import which gives details about error

    - Outlet                => is a named import which will be replaced by the path component

    - Link                  =>  is a named import which is used to navigate through the app

    - useParams             =>  is a named import which is used to access dynamic parameters from current URL

                                The useParams hook in react-router-dom is a built-in tool that allows you to access dynamic parameters from the current URL path. It returns an object of key/value pairs where the keys are the placeholders you defined in your route (e.g., :id) and the values are the actual data in the URL.

## createBrowserRouter, RouterProvider, useRouteError, Outlet imports

    import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

## RouterProvider

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,

        },
        {
            path: "/about",
            element: <About />,
            errorElement: <Error />,
        },
    ]);

    root.render(<RouterProvider router={appRouter} />);

## useRouteError

    import { useRouteError } from "react-router-dom";

    const Error = () => {
    const err = useRouteError();

    return (
        <div>
        <h1>
            {err.status} - {err.statusText}
        </h1>
        <p>{err.error.message}</p>
        </div>
    );
    };

    export default Error;

## Outlet

    import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

    const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
    };

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />,
                },
            ],
            errorElement: <Error />,
        },
    ]);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter} />);

## useParams

    import { useParams } from "react-router-dom";

    const RestaurantMenu = () => {
        const { resId } = useParams();
        ...
    }

## Link

    import { Link } from "react-router-dom";

    <Link to="/">Home</Link>

## Routing

    -   Client Side Routing (React)
    -   Server Side Routing (Network calls)

# Class based components

    -   It is a normal JS class which extends from React.Component which contains render method which returns
        some piece of JSX.

        <UserClass name={"Rafee"}>

        import React from 'react';

        class UserClass extends React.Component {
            constructor(props) {
                super(props)
            }

            render() {
                return (
                    <div>User Name: {this.props.name}</div>
                );
            }
        }

        export default UserClass

# Life cycle methods of Class components [(constructor, render), componentDidMount]

[Life cycle methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

    - Render Phase (Pure and has no side effects. May be paused, aborted or restarted by React.)
    - Commit Phase (Can work with DOM, run side effects, schedule updates.)

    - Parent constructor
    - Parent render

        - Child constructor
        - Child render
        - Child componentDidMount

    - Parent componentDidMount

--- If there are multiple child components, batching (constructor, render) of child components will takes place

    - Parent constructor
    - Parent render

        - First Child constructor
        - First Child render
        - Second Child constructor
        - Second Child render

        - First Child componentDidMount
        - Second Child componentDidMount

    - Parent componentDidMount
