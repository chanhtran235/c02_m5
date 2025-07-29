import axios from "axios";

const URL = 'http://localhost:3001/accounts';

export async function checkLogin(accountInfo) {
    try {
        const response = await axios.get(`${URL}`);
        console.log(response.data);
        let account = response.data.find(ac =>
            ac.username === accountInfo.username &&
            ac.password === accountInfo.password
        );
        return account || null;
    } catch (e) {
        console.error('Lỗi gọi API:', e);
        return null;
    }

}