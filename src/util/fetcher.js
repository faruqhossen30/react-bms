import axios from "./axios";

const fetcher = async (...args) => {
    const res = await axios.get(...args);
    const data = res.data.data;
    return data;
};

export default fetcher;