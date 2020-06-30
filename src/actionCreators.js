const setData = data => {
    return {
        type: "SET_DATA",
        data
    }
};

const setJsonResponse = json_response => {
    return {
        type: "SET_JSON_RESPONSE",
        json_response
    }
};

const setAmounts = amounts => {
    return {
        type: "SET_AMOUNTS",
        amounts
    }
};

const setDescriptions = descriptions => {
    return {
        type: "SET_DESC",
        descriptions
    }
};

export { setData, setJsonResponse, setAmounts, setDescriptions };