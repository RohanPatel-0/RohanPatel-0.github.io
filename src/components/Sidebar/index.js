import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activaclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activaclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activaclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activaclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="Https://www.linkedin.com/in/rohan-patel812/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar