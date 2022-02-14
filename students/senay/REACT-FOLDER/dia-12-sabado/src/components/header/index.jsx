import './style.css';

function Header() {
    return (
        <header className="container__header">
            <h1 className='container__header--header'>Countries</h1>
            <form>
                <input className='search' type="text" placeholder="Search"/>
                <button className='btn'>Search</button>
            </form>
        </header>
    )
}
export default Header;