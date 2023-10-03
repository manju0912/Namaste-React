// Nested Elements in React
// <div id="parent">
//     <div id="child">
//         <h1></h1>
//     </div>
// </div>

import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"},
    [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")])
);

const heading = React.createElement("h1", {}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);


//Note To Take
// React Element is an Object.