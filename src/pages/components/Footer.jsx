import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "../../utils/icons"

import { Link } from "react-router-dom";

function Footer() {
    return (<footer>
        <div className="footer-text">
            <p>Umeå Universitet</p>
            <p>901 87 Umeå</p>
            <Link to="/contact">Kontakta Oss<FontAwesomeIcon icon={icons.faAngleRight} /></Link>
        </div>
        <div className="footer-icons">
            <a href="https://www.facebook.com/umeauniversitet?locale=sv_SE" aria-label="Facebook">Facebook<FontAwesomeIcon icon={icons.faFacebook} /></a>
            <a href="https://www.instagram.com/umeauniversitet/" aria-label="Instagram">Instagram<FontAwesomeIcon icon={icons.faInstagram} /></a>
            <a href="https://www.linkedin.com/school/umea-universitet/" aria-label="LinkedIn">LinkedIn<FontAwesomeIcon icon={icons.faLinkedin} /></a>
        </div>
    </footer>)
}

 export default Footer;
