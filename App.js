import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Hey i am a heading tag"),
        React.createElement("h2", {}, "Hey i am a heading2 tag"),
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Hey i am a heading tag"),
        React.createElement("h2", {}, "Hey i am a heading3 tag"),
    ])
);
// const heading = React.createElement("h1",{id:"heading"},"Hello world using React...");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);