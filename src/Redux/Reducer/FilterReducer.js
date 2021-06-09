import { FILTER_SIZE, FILTER_SORT } from "../Action/FilterAction";

import { initialState } from "./initialState";




export const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_SORT:
          console.log('object');
        return state
        case FILTER_SIZE :
        return state
        default:
            return state
    }
}
