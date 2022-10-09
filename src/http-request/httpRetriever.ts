import axios from 'axios';
import { URL_ENDPOINT } from '../utils/constants';
import { httpDataParser } from './dataParser';

export const retrieverInitData = async () => {

    const response = await axios.post(URL_ENDPOINT);
    const { data: { credentials } } = response;
    return httpDataParser(credentials);
}

