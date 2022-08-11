import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
    return (
        <div className="h-full box-border flex flex-col">
            {/* <Navbar /> */}
            <Container />
            <div className="flex-auto"></div>
            <Footer />
        </div>
    );
}

export default Home;
