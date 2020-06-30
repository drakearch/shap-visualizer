import { createStore } from 'redux'

const reducer = (state, action) => {

    if(action.type === "SET_JSON_RESPONSE") {
        return {
            ...state,
            json_response: action.json_response
        }
    }

    if(action.type === "SET_DATA") {
        return {
            ...state,
            data: action.data
        }
    }

    if(action.type === "SET_AMOUNTS") {
        return {
            ...state,
            amounts: action.amounts
        }
    }

    if(action.type === "SET_DESC") {
        return {
            ...state,
            descriptions: action.descriptions
        }
    }

    return state;
}

export default createStore(reducer, {
    json_response: null,
    data: [],
    amounts: [],
    descriptions: []
});