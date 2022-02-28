import { Link } from "react-router-dom";
import './style.css';


function Header() {
    return (
        <header className="header">
            <nav className="navegacion">
                <Link className="header-link" to='/'>Home</Link>
                <Link className="header-link" to='/countries'>Search Countries</Link>
            </nav>
        </header>
    );
}

export default Header;