import React from "react";
import BotomAction from "./components/BotomAction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistic from "./components/Statistic";

function App() {
    return (
        <div className="overflow-x-hidden">
            <div role="navigation">
                <Navbar />
            </div>
            <div role="banner">
                <Hero />
            </div>
            <div role="main">
                <Statistic />
                <BotomAction />
            </div>
            <div role="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
