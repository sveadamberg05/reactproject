import React from "react";
import Header from "./components/Header";
import EditionsExtra from "./components/EditionsExtra";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "../utils/icons"
import Upplaga20Img from "../images/upplaga20.jpg"

import { Link } from "react-router-dom";

class Upplaga20 extends React.Component {
    render() {
        return (
            <main className="books">
                <Header />
                <div id="breadcrumb">
                    <Link to="/">
                        <p className="prev">Resultat</p>
                    </Link><FontAwesomeIcon icon={icons.faAngleRight} /><Link to="/title">
                        <p className="prev">Upplagor</p>
                    </Link><FontAwesomeIcon icon={icons.faAngleRight} />
                    <p>Upplaga 20</p>
                </div>

                <section className="edition-main">
                    <div className="image"><img src={Upplaga20Img} alt="Upplaga 20" /></div>
                    <div id="book-data">
                        <p>Bok • Kursbok</p>
                        <h1>Den nya affärsredovisningen</h1>
                        <p>Författare: Arvidson, Per; Carrington, Thomas; Johed, Gustav; Nordlund, Isabella</p>
                        <p>2016 • Upplaga 20 </p>
                        <p>International standard number (ISBN): 9789147144051</p>
                    </div>

                    <div id="availability">
                        <div className="location">
                            <h2>Universitetsbiblioteket</h2><a
                                href="https://maps.ub.umu.se/sv?cn=Arvidson%2C+P&col=KURS&lib=UB&sysid=%28SE-LIBR%293h9k12z71gmskq75">
                                <p>Se karta</p><FontAwesomeIcon icon={icons.faLocationDot} />
                            </a>
                        </div>
                        <div className="avail-text">Boken finns i samlingen<strong> Kursbok</strong>, med placeringen
                            <strong> Arvidson, P.</strong>
                        </div>
                        <div className="avail-area">
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="status">Status</th>
                                        <th>Lånetid</th>
                                    </tr>
                                    <tr>
                                        <td className="status"><FontAwesomeIcon icon={icons.faCircleCheck} className="semi-available" />Referensexemplar
                                        </td>
                                        <td>Ej hemlån</td>
                                    </tr>
                                    <tr>
                                        <td className="status"><FontAwesomeIcon icon={icons.faCircleXmark} className="non-available" />Utlånad till
                                            2026-02-28</td>
                                        <td>2 veckor</td>
                                    </tr>
                                    <tr>
                                        <td className="status"><FontAwesomeIcon icon={icons.faCircleXmark} className="non-available" />Utlånad till
                                            2026-03-05</td>
                                        <td>2 veckor</td>
                                    </tr>
                                    <tr>
                                        <td className="status"><FontAwesomeIcon icon={icons.faCircleXmark} className="non-available" />Utlånad till
                                            2026-03-10</td>
                                        <td>2 veckor</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2>Boken kan i nuläget ej reserveras</h2>
                        </div>
                    </div>
                </section>

                <EditionsExtra />
                <Footer />
            </main>
        );
    }
}

export default Upplaga20;