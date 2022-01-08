import axios from 'axios';
// https://viacep.com.br/ws/23095720/json
//23095720/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;