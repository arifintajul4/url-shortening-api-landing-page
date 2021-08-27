import React from "react";
import BotomAction from "./components/BotomAction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistic from "./components/Statistic";

function App() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Statistic />
            <BotomAction />
            <Footer />
        </div>
    );
}

export default App;
