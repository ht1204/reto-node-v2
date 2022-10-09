import { retrieverInitData, retrieveAccessCode } from '../http-request';
import { redisMiddleware } from '../redis';
import { mongoMiddleware } from '../mongodb';


export const runApplication = async () => {
    const redisCredentials = await retrieverInitData();
    const mongoCredentials = await redisMiddleware(redisCredentials);
    await mongoMiddleware(mongoCredentials);
    await retrieveAccessCode();
}