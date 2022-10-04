import { retrieverInitData } from '../http-request';
import { redisMiddleware } from '../redis';
import { mongoMiddleware } from '../mongodb';


export const runApplication = async () => {
    const { host, port, user, password } = await retrieverInitData();

    const [
        redisHost,
        redisPort,
        redisUser,
        redisPass
    ]: string = [host, port, user, password] as unknown as string;

    const redisCredentials = {
        host: redisHost,
        port: redisPort,
        user: redisUser,
        password: redisPass
    }

    const mongoCredentials = await redisMiddleware(redisCredentials);
    await mongoMiddleware(mongoCredentials);


}