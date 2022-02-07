// 1. Crear una nueva propiedad en el objeto action.
// 2. crear el case en el reducer.
// 3. crear la funcion que retorne la action.
// 4. Ejecute el dispatch con la funcion creada anteriormente.

import axios from "axios"
import { getConfig } from '../../utils'

export const actions = {
    setProductsList: "SET_PRODUCTS_LIST",
    setProductDetail: "SET_PRODUCT_DETAIL",
    setIsLoading: "SET_IS_LOADING",
    setCategories: "SET_CATEGORIES"
}

export const setProductsList = products => ({
    type: actions.setProductsList,
    payload: products
});

export const setProductDetail = products => ({
    type: actions.setProductDetail,
    payload: products
});

export const setCategories = categories => ({
    type: actions.setCategories,
    payload: categories
})

export const setIsLoading = isLoading => ({
    type: actions.setIsLoading,
    payload: isLoading
})

export const getProductsThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/products/', getConfig())
            .then(res => dispatch(setProductsList(res.data)))
            .catch(error => console.log(error.response))
            .finally(() => dispatch((setIsLoading(false))))
    }
}

export const getProductsDetailThunk = id => {
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
            .then(res => dispatch(setProductDetail(res.data)))
            .catch(error => console.log(error.response))
            .finally(() => dispatch((setIsLoading(false))))
    }
}

export const getCategoriesThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/categories/`, getConfig())
            .then(res => dispatch(setCategories(res.data)))
            .catch(error => console.log(error.response))
            .finally(() => dispatch((setIsLoading(false))))
    }
}

export const filterCategoryThunk = id => {
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
            .then(res => dispatch(setProductsList(res.data)))
            .catch(error => console.log(error.response))
            .finally(() => dispatch((setIsLoading(false))))
    }
}

export const filterProductsThunk = product => {
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${product}`, getConfig())
            .then(res => dispatch(setProductsList(res.data)))
            .catch(error => console.log(error.response))
            .finally(() => dispatch((setIsLoading(false))))
    }
}