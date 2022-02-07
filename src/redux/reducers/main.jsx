import { actions } from '../actions/main'

const INITIAL_STATE = {

    shopList: [],
    productDetail: {},
    categories: [],
    isLoading: false

}

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actions.setProductsList:
            return {
                ...state,
                shopList: action.payload
            }
        case actions.setIsLoading:
            return {
                ...state,
                isLoading: action.payload
            }
        case actions.setProductDetail:
            return {
                ...state,
                productDetail: action.payload
            }
        case actions.setCategories:
            return{
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export default reducer;