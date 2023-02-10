import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className="navBarDiv">
            <Link className='logo' to="/">New Movies</Link>


            <nav className='navButtons'>
                <Link to="/favorites">Favoritos</Link>
                <Link to="/about">Sobre</Link>
            </nav>
        </header>
    )
}

export default NavBar;
