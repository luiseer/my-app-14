import React, {useEffect} from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';

const Shop = () => {

const dispatch = useDispatch()

    useEffect(() => {
        axios('')
    }, [])

  return (
    <div>
        <h1>Shop</h1>
    </div>
    );
};

export default Shop;
