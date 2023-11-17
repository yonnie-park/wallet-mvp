import axios from "axios"
import { error } from "console"
const fetchKeplrBalance = async (walletAddress:string) => {
    const res = await axios.get(``)
    const data = res.data
    return data
}

export default fetchKeplrBalance;