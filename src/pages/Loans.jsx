import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Link } from "react-router-dom";

class Loans extends React.Component {
    render() {
        return (
            <main className="menu">
                <Header />

                <section id="menu-content">
                    <h2>Mina Lån (under konstruktion)</h2>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                </section>

                <Footer />
            </main>
        );
    }
}

export default Loans;