import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:3001/'
})

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common["Accept"] = 'application/json';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default instance;