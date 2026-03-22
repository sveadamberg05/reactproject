import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import Upplaga22Img from "../images/upplaga22.jpg"
import Upplaga21Img from "../images/upplaga21.jpg"
import Upplaga20Img from "../images/upplaga20.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "../utils/icons"
import randomize from "../utils/script";
import React, { useState } from "react";
import { Link } from "react-router-dom";

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hamburgerMenuOpen: false,
            filterMenuOpen: false,
            books: [
                {edition: 22, img: Upplaga22Img, available: randomize()},
                {edition: 21, img: Upplaga21Img, available: randomize()},
                {edition: 20, img: Upplaga20Img, available: randomize()},
            ]
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
                    {this.state.books.map((book) => (
                        <Link key={book.edition} to={`/title/edition${book.edition}`}>
                            <div className="edition">
                                <div className="image"><img src={book.img} alt={`Upplaga ${book.edition}`} />
                                </div>
                                <h2>Upplaga {book.edition} - Den nya affärsredovisningen</h2>
                                <p className={book.available ? "available" : "non-available"}>
                                    {book.available ?
                                        (<> <FontAwesomeIcon icon={icons.faCircleCheck} /> Tillgänglig</>)
                                        : (<><FontAwesomeIcon icon={icons.faCircleXmark} /> Utlånad</>)
                                    }
                                </p>
                            </div>
                        </Link>
                    ))}
                </section>
                <Footer />
            </main >
        );
    }
}

export default Title;