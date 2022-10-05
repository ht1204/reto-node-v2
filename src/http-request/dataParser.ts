
export const httpDataParser = (credentials: any) => {

    const { host, port, user, password } = credentials;
    let redisCredentials = {
        host: '',
        port: '',
        user: '',
        password: '',
    }

    const [
        redisHost,
        redisPort,
        redisUser,
        redisPass
    ]: string = [host, port, user, password] as unknown as string;

    redisCredentials.host = redisHost;
    redisCredentials.port = redisPort;
    redisCredentials.user = redisUser;
    redisCredentials.password = redisPass;
    console.log('redisCredentials: ', redisCredentials);

    return redisCredentials;
}