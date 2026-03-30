import React from "react";
import video from "../images/video.mp4"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "../utils/icons"

import { Link } from "react-router-dom";

class Contact extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            hamburgerMenuOpen: false,
            filterMenuOpen: false
        };
    }

    render() {
        return (
            <main className="contact" onClick={() => {
                this.setState({ hamburgerMenuOpen: false, filterMenuOpen: false });
            }}>
                <Header menuOpen={this.state.hamburgerMenuOpen} setMenuOpen={() => { this.setState({ hamburgerMenuOpen: !this.state.hamburgerMenuOpen }) }} />
                <div id="breadcrumb">
                    <Link to="/">
                        <p className="prev">Start</p>
                    </Link><FontAwesomeIcon icon={icons.faAngleRight} />
                    <p>Kontakta oss</p>
                </div>
                <div id="drop-area">
                    <video id="video" controls width="400" autoPlay muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <section>
                    <form id="contact" action="mailto:svea.damberg05@gmail.com" method="get">
                        <h2>Kontakta oss</h2>
                        <ul id="sort-area">
                            <li><label htmlFor="fname">Förnamn</label>
                                <input type="text" id="fname" name="fname" placeholder="Förnamn" required />
                            </li>
                            <li>
                                <label htmlFor="lname">Efternamn</label>
                                <input type="text" id="lname" name="lname" placeholder="Efternamn" />
                            </li>

                            <li><label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </li>

                            <li><label htmlFor="subject">Ämne</label><input type="text" id="subject" name="subject" placeholder="Ämne" required />
                            </li>

                            <li>
                                <label htmlFor="message">Meddelande</label><textarea id="message" name="message" placeholder="Meddelande" required></textarea>
                            </li>
                        </ul>
                        <input type="submit" value="Skicka" />
                    </form>
                </section>
                <Footer />
            </main>

        );
    }
}
export default Contact;