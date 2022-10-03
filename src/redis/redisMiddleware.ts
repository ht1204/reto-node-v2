import redis from 'redis';

interface redisMiddlewareProps {
    host: string;
    port: string;
    user:string
    password: string;
}

export const redisMiddleware = async ({ host, port, user, password }: redisMiddlewareProps) => {

    const username = user;
    const redisPort = port as unknown as number;

    const client = redis.createClient({
        socket:{
            host,
            port: redisPort
        },
        username,
        password
    });

    client.on("error", (error) => console.error(`Error : ${error}`));
    await client.connect();

    const mongoHost = await client.get("host");
    const mongoUsername = await client.get("username");
    const mongoPassword = await client.get("password");

    console.log(mongoHost, mongoUsername, mongoPassword);
    /*
    return {
        mongoHost,
        mongoUsername,
        mongoPassword
    }
    */
}