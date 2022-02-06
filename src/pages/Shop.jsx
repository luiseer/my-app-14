import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getConfig } from '../utils'

const Shop = () => {

    const navigate = useNavigate()

  

    const logOut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }

    useEffect(() => {
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/`, getConfig())
            .then(res => console.log(res.data))
    }, [])

    return (
        <div>
            <h1>Shop</h1>
            <button className='bg-orange-100 rounded-md w-24 mt-2' onClick={logOut}>Log out</button>
        </div>
    );
};

export default Shop;