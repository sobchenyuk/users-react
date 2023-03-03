import axios from "axios";
import {ENV_ENDPOINT} from "../../constants/envairement";

export const getUsers = async () => {
    try {
        const { data } = await axios.get(`${ENV_ENDPOINT}/users`);
        return data
    } catch (e) {
        // @ts-ignore
        console.log(e?.message)
    }
}
