// 1. Crear una nueva propiedad en el objeto action.
// 2. crear el case en el reducer.
// 3. crear la funcion que retorne la action.
// 4. Ejecute el dispatch con la funcion creada anteriormente.

import axios from "axios"
import { getConfig } from '../../utils'

export const actions = {
    setProductsList: "SET_PRODUCTS_LIST",
    setIsLoading: "SET_IS_LOADING"
}

export const setProductsList = products => ({
  type: actions.setProductsList,
  payload: products
});

export const setIsLoading = isLoading => ({
    type: actions.setIsLoading,
    payload: isLoading
})


export const getProductsThunk = () =>{
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/products/', getConfig())
            .then(res => dispatch(setProductsList(res.data)))
            .catch(error => console.log(error.response))
            .finally(() => dispatch((setIsLoading(false))))
    }
}

