import axios from 'axios';

export const useFetch = async (url) => {
    try {
        axios.defaults.baseURL = "https://tech-react-antd-json.cyclic.app";
        const { data } = await axios.get(url);

        return data;
    } catch (error) {
        throw new Error(error);
    }
}