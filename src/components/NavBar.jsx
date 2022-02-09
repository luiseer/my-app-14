import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate()
    const logOut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }
    return (
        <div>
            <nav className='flex justify-around mt-5 bg-rosa-principal'>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
                <button onClick={logOut}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                </button>
            </nav>

        </div>
    );
};

export default NavBar;
