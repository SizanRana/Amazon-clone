export const initialState ={
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //Logic for removing from basket...

            //we cloned the basket
            let newBaket = [...state.basket]


            //we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //item exists in basket, remove it....
                newBaket.splice(index, 1);
                
            } else {
                console.warn(`Cant remove product (id: ${action.id} as its not in the basket`);
            }

            return { ...state, basket: newBaket };
        default:
            return state;
    }
}

export default reducer;