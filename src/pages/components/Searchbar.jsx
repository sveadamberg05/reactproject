import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "../../utils/icons"
import { useState } from 'react';

function Searchbar({menuOpen, setMenuOpen}) {
    const [availabilityOpen, setAvailabilityOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const preventSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div id="search-and-filter">
            <form className="search" onSubmit={preventSubmit}>
                <input id="searchbar" type="text" placeholder="Sök böcker, artiklar, avhandlingar med mera..." name="search"></input>
                <button type="submit"><FontAwesomeIcon icon={icons.faSearch} /></button>
            </form>

            <div className="active-filters">
                <button className="active-button" id="onsite" type="button" aria-label="">
                    "På plats"<FontAwesomeIcon icon={icons.faSquareXmark} />
                </button>
                <button className="active-button" id="online" type="button" aria-label="">
                    "Online"<FontAwesomeIcon icon={icons.faSquareXmark} />
                </button>
                <button className="active-button" id="sv" type="button" aria-label="">
                    "Svenska"<FontAwesomeIcon icon={icons.faSquareXmark} />
                </button>
                <button className="active-button" id="en" type="button" aria-label="">
                    "Engelska"<FontAwesomeIcon icon={icons.faSquareXmark} />
                </button>
            </div>

            <div className="dropdown" id="filter-menu">
                <button type="button" className="filter-button" aria-label="Filtrera resultat" onClick={(e) => { e.stopPropagation(); setMenuOpen()}}>
                    <FontAwesomeIcon icon={icons.faSliders} /> <p>Filtrera</p>
                </button>

                <form id="filter-form" onClick={(e) => {e.stopPropagation()}}>
                    <ul className={menuOpen ? "dropdown-content open" : "dropdown-content"} id="filter-content">
                        <li className="inner-filter-menu ">
                            <button type="button" onClick={() => setAvailabilityOpen(!availabilityOpen)}>Tillgänglighet<FontAwesomeIcon icon={icons.faAngleDown} className={availabilityOpen ? "rotated" : ""} /></button>
                            <ul className={`inner-filter-content dropdown-content${availabilityOpen ? " open" : ""}`}>
                                <li>
                                    <label>
                                        <input type="checkbox" name="availability" value="onsite" />
                                        På plats
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="availability" value="online" />
                                        Online
                                    </label>
                                </li>
                            </ul>
                        </li>

                        <li className="inner-filter-menu">
                            <button type="button" onClick={() => setLanguageOpen(!languageOpen)}>Språk<FontAwesomeIcon icon={icons.faAngleDown} className={languageOpen ? "rotated" : ""} /></button>
                            <ul className={`inner-filter-content dropdown-content ${languageOpen ? " open" : ""}`}>
                                <li>
                                    <label>
                                        <input type="checkbox" name="language" value="sv" />
                                        Svenska
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="language" value="en" />
                                        Engelska
                                    </label>
                                </li>
                            </ul>
                        </li>

                        <li className="inner-filter-menu">
                            <input id="filter-submit" type="submit" value="Spara"></input>
                        </li>

                    </ul>
                </form>
            </div>
        </div>
    )
}
export default Searchbar;