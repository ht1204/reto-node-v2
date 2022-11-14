import { retrieverInitData } from '../http-request/httpRetriever';
import { retrieveAccessCode } from '../http-request/httpAccessCode';
import { redisMiddleware } from '../redis/redisMiddleware';
import { mongoMiddleware } from '../mongodb/mongoMiddleware';


export const runApplication = async () => {
    const redisCredentials = await retrieverInitData();
    const mongoCredentials = await redisMiddleware(redisCredentials);
    await mongoMiddleware(mongoCredentials);
    await retrieveAccessCode();
}