import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Link } from "react-router-dom";

class Account extends React.Component {
    render() {
        return (
            <main className="menu">
                <Header />

                <section id="menu-content">
                    <h2>Mitt Konto (under konstruktion)</h2>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                </section>

                <Footer />
            </main>
        );
    }
}

export default Account;