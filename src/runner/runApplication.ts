import { retrieverInitData } from '../http-request';
import { redisMiddleware } from '../redis';


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

    await redisMiddleware(redisCredentials);

}