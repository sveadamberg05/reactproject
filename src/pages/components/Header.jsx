import logo from "../../images/umu_logga-modified.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "../../utils/icons"

import { Link } from "react-router-dom";

function Header({menuOpen, setMenuOpen}) {
    return (
        <header>
            <nav>
                <div className="left">
                    <div className="dropdown" id="hamburger-menu">
                        <button type="button" aria-label="Öppna meny" onClick={(e) => {e.stopPropagation(); setMenuOpen()}}>
                            <FontAwesomeIcon icon={icons.faBars} />
                        </button>
                        <ul className={menuOpen ? "dropdown-content open" : "dropdown-content"} id="hamburger-content">
                            <li><Link to="/account">Mitt konto</Link></li>
                            <li><Link to="/loans">Mina lån</Link></li>
                            <li><Link to="/saved">Mina sparade</Link></li>
                        </ul>
                    </div>
                    <div className="vertical-line"></div>
                    <h1 className="main-text"><Link to="/">Bibliotek</Link></h1>
                </div>
                <Link to="/"><img id="logo" src={logo} alt="Umeå Universitet Logga" /></Link>

                <div className="right">
                    <div className="dropdown">
                        <button type="button" aria-label="Öppna profilmeny">
                            <FontAwesomeIcon icon={icons.faUser} />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        )
}
export default Header;