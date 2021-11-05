import {actionTypes} from "./types";

export const initialState = {
    term: null
}

export const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {

        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.payload
            }

        default:
            return state
    }

}