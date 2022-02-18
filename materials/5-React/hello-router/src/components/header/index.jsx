import './style.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link className='hola' to='/hello'>Go to hello</Link>
                <Link className='hola' to='/countries'>Search Countries</Link>
            </nav>
        </header>
    )
}


export default Header;