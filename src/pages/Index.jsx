import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "../utils/icons"

import { Link } from "react-router-dom";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hamburgerMenuOpen: false,
            filterMenuOpen: false
        };
    }

    render() {
        return (
            <main className="main" onClick={() => {
                this.setState({ hamburgerMenuOpen: false, filterMenuOpen: false });
            }}>
                <Header menuOpen={this.state.hamburgerMenuOpen} setMenuOpen={() => { this.setState({ hamburgerMenuOpen: !this.state.hamburgerMenuOpen }) }} />
                <Searchbar menuOpen={this.state.filterMenuOpen} setMenuOpen={() => {this.setState({ filterMenuOpen: !this.state.filterMenuOpen }) }} />
                <section id="items">
                    <Link to="/title" className="title">
                        <h2>Den nya affärsredovisningen</h2>
                        <FontAwesomeIcon icon={icons.faBook} className="editions-icon" />
                        <p>Arvidsson, Per...</p>
                        <p>
                            3 versioner finns. Se alla<FontAwesomeIcon icon={icons.faAngleRight} className="arrow-icon" />
                        </p>
                    </Link>
                    <Link to="" className="title">
                        <h2>Den nya affärsredovisningen</h2>
                        <FontAwesomeIcon icon={icons.faBook} className="editions-icon" />
                        <p>Efternamn, Förnamn</p>
                        <p>
                            X versioner finns. Se alla<FontAwesomeIcon icon={icons.faAngleRight} className="arrow-icon" />
                        </p>
                    </Link>

                    <Link to="" className="title">
                        <h2>Den nya affärsredovisningen</h2>
                        <FontAwesomeIcon icon={icons.faBook} className="editions-icon" />
                        <p>Efternamn, Förnamn</p>
                        <p>
                            X versioner finns. Se alla<FontAwesomeIcon icon={icons.faAngleRight} className="arrow-icon" />
                        </p>
                    </Link>
                    <Link to="" className="title">
                        <h2>Den nya affärsredovisningen</h2>
                        <FontAwesomeIcon icon={icons.faBook} className="editions-icon" />
                        <p>Efternamn, Förnamn</p>
                        <p>
                            X versioner finns. Se alla<FontAwesomeIcon icon={icons.faAngleRight} className="arrow-icon" />
                        </p>
                    </Link>
                </section>
                <Footer />
            </main>
        );
    }
}

export default Index;