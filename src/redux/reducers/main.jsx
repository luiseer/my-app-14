import { actions } from '../actions/main'

const INITIAL_STATE = {

    shopList: []

}

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actions.setProductsList:
            return {
                ...state,
                shopList: action.payload
            }
        default:
            return state
    }
}

export default reducer;