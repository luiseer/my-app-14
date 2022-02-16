import { faCartShopping, faRightFromBracket, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate()
    const logOut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }
    return (
        <div>
            <div className='flex justify-center uppercase mt-5'>
                <Link to={'/shop'}>
                    <h1>Lorenza</h1>
                </Link>

            </div>
            <nav className='flex justify-around mt-5 bg-rosa-principal'>
                <Link to="/shop"><FontAwesomeIcon icon={faShop} /></Link>
                <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                <button onClick={logOut}><FontAwesomeIcon icon={faRightFromBracket} /></button>
            </nav>

        </div>
    );
};

export default NavBar;
