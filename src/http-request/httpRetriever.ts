import axios from 'axios';
import { URL_ENDPOINT } from '../utils/constants';

export const retrieverInitData = async () => {

    const response = await axios.post(URL_ENDPOINT);

    const{ data: { credentials } } = response;
    const {host, port, user, password } = credentials;
    console.log(host, port, user, password);

    return {
        host, 
        port, 
        user,
        password
    }
} 
