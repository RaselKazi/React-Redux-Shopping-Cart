import { Products } from "../../data";

export const initialState = {
    products: Products,
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    size: '',
    sort: '',
}