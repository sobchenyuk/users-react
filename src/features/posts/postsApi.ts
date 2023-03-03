import axios from "axios";
import {ENV_ENDPOINT} from "../../constants/envairement";

export const getPostsByUserId = async (userId: number) => {
    try {
        const { data } = await axios.get(`${ENV_ENDPOINT}/users/${userId}/posts`);
        return data
    } catch (e) {
        // @ts-ignore
        console.log(e?.message)
    }
}
