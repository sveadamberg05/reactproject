import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Link } from "react-router-dom";

class Loans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hamburgerMenuOpen: false,
            filterMenuOpen: false
        };
    }

    render() {
        return (
            <main className="menu" onClick={() => {
                this.setState({ hamburgerMenuOpen: false, filterMenuOpen: false });
            }}>
                <Header menuOpen={this.state.hamburgerMenuOpen} setMenuOpen={() => { this.setState({ hamburgerMenuOpen: !this.state.hamburgerMenuOpen }) }} />

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