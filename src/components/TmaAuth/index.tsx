import axios from "axios";

export const tmaAuth = async (initDataRaw: string): Promise<void> => {
    try {
        const response = await axios.post("https://gate.pornofnd.com/api/web/auth/telegram", {
            init_data: initDataRaw,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log(response?.data)
        }
    } catch (error) {
        console.error('There was an error!', error);
    }
};