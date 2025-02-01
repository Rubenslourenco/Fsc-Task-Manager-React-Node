import React from "react";
import Tasks from "./components/Tasks";
import SideBar from "./components/SideBar";
// import { set } from "mongoose";

import "./App.scss";

const App = () => {
    return (
        <div className="app-container">
            <SideBar />
            <Tasks />
        </div>
    );
};

export default App;
