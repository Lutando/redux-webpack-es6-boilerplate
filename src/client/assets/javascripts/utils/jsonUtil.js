

function validateJSON (jsonString) {
    try {
        JSON.parse(jsonString)
    } catch(e) {
        return false;
    }
    return true;
}

export default validateJSON;