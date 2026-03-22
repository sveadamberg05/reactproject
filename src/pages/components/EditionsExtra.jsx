import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from "../../utils/icons"

function EditionsExtra() {
    return (
        <section className="edition-extra">
            <div className="dropdown edition-dropdowns">
                <h2>Mer information</h2><FontAwesomeIcon icon={icons.faAngleDown}/>
                <div className="dropdown-content">
                    <p>Information</p>
                </div>
            </div>
            <div className="dropdown edition-dropdowns">
                <h2>Hantera referenser</h2><FontAwesomeIcon icon={icons.faAngleDown}/>
                <div className="dropdown-content">
                    <p>Information</p>
                </div>
            </div>
            <div className="dropdown edition-dropdowns">
                <h2>Kontakt och övriga länkar</h2><FontAwesomeIcon icon={icons.faAngleDown}/>
                <div className="dropdown-content">
                    <p>Information</p>
                </div>
            </div>
        </section>
    )
}

export default EditionsExtra;