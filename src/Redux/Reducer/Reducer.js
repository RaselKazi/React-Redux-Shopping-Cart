import { Products } from "../../data";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Action/CartAction";
import { FILTER_SIZE, FILTER_SORT } from "../Action/FilterAction";
import { initialState } from "./initialState";




const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const product = action.product
            const cartItems = state.cartItems.slice();
            let alradyAdded = false;
            cartItems.map(pd => {
                if (pd._id === product._id) {
                    pd.count++;
                    alradyAdded = true;
                }

                localStorage.setItem("cartItems", JSON.stringify(cartItems))
                return {
                    ...state, cartItems
                }
            })
            if (!alradyAdded) {

                cartItems.push({ ...product, count: 1 })
                localStorage.setItem("cartItems", JSON.stringify(cartItems))

            }
            return {
                ...state, cartItems
            }
        case REMOVE_FROM_CART:
            const newCart = state.cartItems.filter(ci => ci._id !== action.id)
            localStorage.setItem("cartItems", JSON.stringify(newCart))
            return {
                ...state, cartItems: newCart
            }
        case FILTER_SORT:
            const sort = action.value
            return {
                ...state,
                sort: sort,
                products: state.products.slice().sort((a, b) =>
                    sort === "Lowest" ? (a.price > b.price) ? 1 : -1
                        : sort === "Highest" ? (a.price < b.price) ? 1 : -1
                            : (a._id > b._id) ? 1 : -1
                )
            }
        case FILTER_SIZE:
            let newState
            action.value === "" ? newState ={ ...state, size: "", products: Products } :

                newState ={
                    ...state,
                    products: Products.filter(pd => pd.availableSizes.indexOf(action.value) >= 0),
                    size: action.value
                }
                return newState
        default:
            return state
    }
}
export default Reducer