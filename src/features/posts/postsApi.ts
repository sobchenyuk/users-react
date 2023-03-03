import axios from "axios";
import {ENV_ENDPOINT} from "../../constants/envairement";

export const getAlbumsByUserId = async (userId: number) => {
    try {
        const { data } = await axios.get(`${ENV_ENDPOINT}/users/${userId}/albums`);
        return data
    } catch (e) {
        // @ts-ignore
        console.log(e?.message)
    }
}
