const INITIAL_STATE = {

    shopList: []
    
}

const reducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case 'SET_NEW_LIST':
            return{
                ...state,
                shopList: action.payload
            }
        default:
            return state
    }

  
}

export default reducer;