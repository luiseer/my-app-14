import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate()
    const logOut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }
    return (
        <div>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
                <button
                    className='bg-orange-100 rounded-md w-24 mt-2'
                    onClick={logOut}>
                    Log out
                </button>
            </nav>

        </div>
    );
};

export default NavBar;
