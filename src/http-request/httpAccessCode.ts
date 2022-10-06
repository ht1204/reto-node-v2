import axios from 'axios';
import { URL_ENDPOINT_ACCESS_CODE } from '../utils/constants';

export const retrieveAccessCode = async () => {

    const response = await axios.post(URL_ENDPOINT_ACCESS_CODE);
    const { data } = response;
    console.log('retrieveAccessCode-Data: ', data);
}
