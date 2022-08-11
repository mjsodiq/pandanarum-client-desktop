import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./features/home/Home";

function App() {
    return (
        <div className="App min-h-screen min-w-full flex flex-col">
            {/* <div className=" self-center">Under maintenance</div> */}
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
