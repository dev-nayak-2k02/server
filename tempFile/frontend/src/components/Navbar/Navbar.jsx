import { Link } from "react-router-dom"
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <>
    <div className="navbar">
          <h1>Welcome User</h1>
          <ul  className="navbar-right">
              <li><Link className="links" to="/">Home</Link></li>
              <li><Link className="links" to="/todos">Todo</Link></li>
              <li><FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon></li>
          </ul>
        </div>
    </> 
  )
}

export default Navbar
