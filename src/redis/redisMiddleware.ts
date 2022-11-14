import { createClient } from 'redis';

interface redisMiddlewareProps {
    host: string;
    port: string;
    user: string
    password: string;
}

export const redisMiddleware = async ({ host, port, user, password }: redisMiddlewareProps) => {

    let mongoDBCredentials = {
        mongoHost: '',
        mongoUsername: '',
        mongoPassword: '',
    }

    try {
        const username = user;
        const redisPort = port as unknown as number;

        const client = createClient({
            socket: {
                host,
                port: redisPort
            },
            username,
            password
        });

        client.on("error", (error: Error) => {
            console.error(`Error : ${error}`);
            process.exit(0);
        });
        await client.connect();

        const hostFromRedis = await client.get("host");
        const usernameFromRedis = await client.get("username");
        const passwordFromRedis = await client.get("password");

        console.log('Gathered Redis Data');
        console.log(hostFromRedis, '-', usernameFromRedis, '-', passwordFromRedis);

        const hostForMongo: string = hostFromRedis || 'mongo.cluster';
        const userForMongo: string = usernameFromRedis || 'mongo.user';
        const passwordForMongo: string = passwordFromRedis || 'mongo.pass';

        mongoDBCredentials = {
            mongoHost: hostForMongo,
            mongoUsername: userForMongo,
            mongoPassword: passwordForMongo,
        }
    } catch (error) {
        console.log("Error: ", error);
    }
    console.log();
    console.log('mongoDBCredentials: ', mongoDBCredentials);

    return mongoDBCredentials;
}