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

export { setData, setJsonResponse };