import axios from "axios";

export function iecho(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/iecho?text=${payload}`)
            return dispatch({
                type: "IECHO",
                payload: json.data
            })
        } catch (error) {
            console.log('error in iecho action ' + error)
        }
    }
}